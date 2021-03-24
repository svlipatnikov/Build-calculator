/* eslint-disable camelcase */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { getMaterials } from 'redux/actions/customerCalcAction';
import { materialsForCalc } from 'redux/selectors/customerCalcSelector';
import { Button, Container, Typography, Box, TextField } from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { makeStyles } from '@material-ui/core/styles';
import sendRequest from 'api';
import { setCurrentCustomerIsChangedAction } from 'redux/actions/currentCustomerAction';
import customerNewValueCalc from '../../redux/selectors/customerNewCalcSelector';
import { setValueNewCalc, clearValueNewCalc } from '../../redux/actions/customerNewCalcAction';
import BoxForm from './BoxForm';
import BoxFormSelect from './BoxFormSelect';
import CustomAccordion from '../../components/CustomAccordion/CustomAccordion';
import { osb, insulation, waterproofing, windscreen } from './const';
import DoorAndWindow from './DoorAndWindow';
import CalculationImbrication from './CalculationImbrication';

const CalculationFormPage = () => {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();
  const materials = useSelector(materialsForCalc);
  const { customerId } = useParams();

  const {
    adress_object_construction,
    number_of_floors,
    height_of_one_floor,
    perimeter_of_external_walls,
    base_area,
    external_wall_thickness,
    internal_wall_length,
    OSB_for_external_walls,
    steam_waterproofing_external_walls,
    windscreen_external_walls,
    insulation_external_walls,
    OSB_for_interior_walls,
    overlap_thickness,
    OSB_for_base_area,
    steam_waterproofing_base_area,
    windscreen_base_area,
    insulation_base_area,
    wigthWindow,
    heightWindow,
    countWindow,
    wigthDoorOut,
    heightDoorOut,
    countDoorOut,
    wigthDoorIn,
    heightDoorIn,
    countDoorIn,
  } = useSelector(customerNewValueCalc);

  const handleChangeValue = (prop) => (e) => {
    dispatch(setValueNewCalc(prop, e.target.value));
  };

  useEffect(() => {
    if (!materials.length) {
      dispatch(getMaterials());
    }
    // eslint-disable-next-line
  }, []);

  const handleClickClearValue = () => {
    dispatch(clearValueNewCalc());
  };

  const handleClickCustomers = () => {
    history.push(`/customers/${customerId}`);
  };

  const submit = (e) => {
    e.preventDefault();
    sendRequest('/calc_post/', 'POST', {
      structural_element_frame: [
        {
          frame: {
            number_of_floors,
            height_of_one_floor,
            perimeter_of_external_walls,
            base_area,
            external_wall_thickness,
            internal_wall_length,
            OSB_for_external_walls,
            steam_waterproofing_external_walls,
            windscreen_external_walls,
            insulation_external_walls,
            // ОСБ для внутренних стен
            OSB_for_interior_walls,
            // расчет перекрытий
            overlap_thickness,
            OSB_for_base_area,
            steam_waterproofing_base_area,
            windscreen_base_area,
            insulation_base_area,
            step_of_racks: 0.6,
            internal_wall_thickness: 100,
          },
          openings: [
            {
              type: 'Оконные проемы',
              wigth: wigthWindow,
              height: heightWindow,
              count: countWindow,
            },
            {
              type: 'Дверные проемы внешние',
              wigth: wigthDoorOut,
              height: heightDoorOut,
              count: countDoorOut,
            },
            {
              type: 'Дверные проемы внутренние',
              wigth: wigthDoorIn,
              height: heightDoorIn,
              count: countDoorIn,
            },
          ],
        },
      ],
      calculation: {
        customer: Number(`${customerId}`),
        state_calculation: 'Актуален',
        manager: 2,
        adress_object_construction,
        title: 'тестовый расчет',
      },
    }).catch((error) => {
      // eslint-disable-next-line no-console
      console.log(error);
    });
    handleClickClearValue();
    dispatch(setCurrentCustomerIsChangedAction());
    handleClickCustomers();
  };
  return (
    <main>
      <Container maxWidth="lg">
        <div className={classes.mainNav}>
          <Typography variant="h4" color="textPrimary" align="center">
            <Button className={classes.btnArrow} onClick={handleClickCustomers}>
              <ArrowBackIcon fontSize="large" className={classes.arrowBack} />
            </Button>
            Каркас
          </Typography>
        </div>
        <div className={classes.mainButton}>
          <Box>
            <TextField
              className={classes.mainButtonInput}
              style={{
                width: '450px',
                backgroundColor: '#ffffff',
              }}
              placeholder="Добавить адрес объекта строительства"
              variant="outlined"
              color="secondary"
              size="small"
              value={adress_object_construction}
              onChange={handleChangeValue('adress_object_construction')}
            />
            <Button
              variant="contained"
              color="primary"
              style={{ height: '38px', width: '150px' }}
              onClick={handleClickClearValue}
            >
              Очистить расчет
            </Button>
          </Box>
        </div>
        <div className={classes.mainSourceData}>
          <Box css={{ fontSize: 16, fontWeight: 700 }}>Исходные данные</Box>
          <BoxForm
            name="Количество этажей"
            value={number_of_floors}
            title="number_of_floors"
            handleChangeValues={handleChangeValue}
            measure="шт"
          />
          <Box css={{ fontSize: 16, fontWeight: 700 }}>1 Этаж</Box>
          <BoxForm
            name="Высота этажа"
            value={height_of_one_floor}
            title="height_of_one_floor"
            handleChangeValues={handleChangeValue}
            measure="м"
          />
          <BoxForm
            name="Периметр внешних стен"
            value={perimeter_of_external_walls}
            title="perimeter_of_external_walls"
            handleChangeValues={handleChangeValue}
            measure="м"
          />
          <BoxForm
            name="Площадь основания"
            value={base_area}
            title="base_area"
            handleChangeValues={handleChangeValue}
            measure="м2"
          />
          <BoxForm
            name="Толщина внешних стен"
            value={external_wall_thickness}
            title="external_wall_thickness"
            handleChangeValues={handleChangeValue}
            measure="мм"
          />
          <BoxForm
            name="Длина внутренних стен"
            value={internal_wall_length}
            title="internal_wall_length"
            handleChangeValues={handleChangeValue}
            measure="м"
          />
          <div className={classes.outWall}>
            <Box css={{ fontSize: 16, fontWeight: 700 }}>Обшивка внешних стен</Box>
            <BoxFormSelect
              name="ОСБ"
              value={OSB_for_external_walls}
              title="OSB_for_external_walls"
              handleChangeValues={handleChangeValue}
              currencies={osb}
            />
            <BoxFormSelect
              name="Парогидроизоляция"
              value={steam_waterproofing_external_walls}
              title="steam_waterproofing_external_walls"
              handleChangeValues={handleChangeValue}
              currencies={waterproofing}
            />
            <BoxFormSelect
              name="Ветрозащита"
              value={windscreen_external_walls}
              title="windscreen_external_walls"
              handleChangeValues={handleChangeValue}
              currencies={windscreen}
            />
            <BoxFormSelect
              name="Утеплитель"
              value={insulation_external_walls}
              title="insulation_external_walls"
              handleChangeValues={handleChangeValue}
              currencies={insulation}
            />
            <CustomAccordion title="Добавить расчет обшивки внутренних стен" className="mb-30">
              <BoxFormSelect
                name="ОСБ"
                value={OSB_for_interior_walls}
                title="OSB_for_interior_walls"
                handleChangeValues={handleChangeValue}
                currencies={osb}
              />
            </CustomAccordion>
            <CustomAccordion title="Учесть двери и окна" className="mb-30">
              <DoorAndWindow />
            </CustomAccordion>
            <CustomAccordion title="Добавить расчет перекрытий" className="mb-30">
              <CalculationImbrication />
            </CustomAccordion>
          </div>
          <Box display="flex" justifyContent="center">
            <Button variant="contained" color="primary" onClick={submit}>
              Рассчитать
            </Button>
          </Box>
        </div>
      </Container>
    </main>
  );
};

export default CalculationFormPage;

const useStyles = makeStyles((theme) => ({
  mainNav: {
    position: 'relative',
  },
  mainSourceData: {
    maxWidth: 450,
    marginTop: theme.spacing(4),
  },
  mainButton: {
    marginTop: theme.spacing(4),
  },
  outWall: {
    marginTop: theme.spacing(4),
  },
  mainButtonInput: {
    marginRight: theme.spacing(2),
  },
  btnArrow: {
    position: 'absolute',
    top: 0,
    left: 0,
  },
}));
