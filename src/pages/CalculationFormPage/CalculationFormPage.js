/* eslint-disable camelcase */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { useForm, FormProvider } from 'react-hook-form';
import { getMaterials } from 'redux/actions/customerCalcAction';
import { materialsForCalc } from 'redux/selectors/customerCalcSelector';
import { Button, Container, Typography, Box, TextField } from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { makeStyles } from '@material-ui/core/styles';
import sendRequest from 'api';
import { setCurrentCustomerIsChangedAction } from 'redux/actions/currentCustomerAction';
import { setCurrentCalculation } from 'redux/actions/currentCalculationAction';
import customerNewValueCalc from '../../redux/selectors/customerNewCalcSelector';
import { setValueNewCalc, clearValueNewCalc } from '../../redux/actions/customerNewCalcAction';
import BoxForm from './BoxForm';
import BoxFormSelect from './BoxFormSelect';
import CustomAccordion from '../../components/CustomAccordion/CustomAccordion';
import DoorAndWindow from './DoorAndWindow';
import CalculationImbrication from './CalculationImbrication';

const CalculationFormPage = () => {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();
  const materials = useSelector(materialsForCalc);
  const { customerId } = useParams();

  const { adress_object_construction } = useSelector(customerNewValueCalc);
  const methods = useForm();

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

  const submit = (data) => {
    if (data) {
      sendRequest('/calc_post/', 'POST', {
        structural_element_frame: [
          {
            frame: { ...data.frame, step_of_racks: 0.6 },
            openings: [
              { type: 'Оконные проемы', ...data.window },
              { type: 'Дверные проемы внешние', ...data.doorOut },
              { type: 'Дверные проемы внутренние', ...data.doorIn },
            ],
          },
        ],
        calculation: {
          customer: Number(`${customerId}`),
          state_calculation: 'Актуален',
          adress_object_construction,
          title: 'Расчет',
        },
      }).then((response) => {
        if (response) {
          if (response.id) {
            dispatch(setCurrentCalculation(response));
            dispatch(setCurrentCustomerIsChangedAction());
            handleClickClearValue();
            history.push(`/customers/${customerId}/calculation_result/${response.id}`);
          }
        }
      });
    }
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
          <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(submit)} noValidate>
              <Box css={{ fontSize: 16, fontWeight: 700 }}>Исходные данные</Box>
              <BoxForm name="Количество этажей" title="frame.number_of_floors" measure="шт" />
              <Box css={{ fontSize: 16, fontWeight: 700 }}>1 Этаж</Box>
              <BoxForm name="Высота этажа" title="frame.height_of_one_floor" measure="м" />
              <BoxForm name="Периметр внешних стен" title="frame.perimeter_of_external_walls" measure="м" />
              <BoxForm name="Площадь основания" title="frame.base_area" measure="м2" />
              <BoxFormSelect
                name="Толщина внешних стен"
                title="frame.external_wall_thickness"
                currency="externalWall"
              />
              <BoxForm name="Длина внутренних стен" title="frame.internal_wall_length" measure="м" />
              <BoxFormSelect
                name="Толщина внутренних стен"
                title="frame.internal_wall_thickness"
                currency="internalWall"
              />
              <div className={classes.outWall}>
                <Box css={{ fontSize: 16, fontWeight: 700 }}>Обшивка внешних стен</Box>
                <BoxFormSelect name="ОСБ" title="frame.OSB_for_external_walls" currency="osb" />
                <BoxFormSelect
                  name="Парогидроизоляция"
                  title="frame.steam_waterproofing_external_walls"
                  currency="waterproofing"
                />
                <BoxFormSelect name="Ветрозащита" title="frame.windscreen_external_walls" currency="windscreen" />
                <BoxFormSelect name="Утеплитель" title="frame.insulation_external_walls" currency="insulation" />
                <CustomAccordion title="Добавить расчет обшивки внутренних стен" className="mb-30">
                  <BoxFormSelect name="ОСБ" title="frame.OSB_for_interior_walls" currency="osb" />
                </CustomAccordion>
                <CustomAccordion title="Учесть двери и окна" className="mb-30">
                  <DoorAndWindow />
                </CustomAccordion>
                <CustomAccordion title="Добавить расчет перекрытий" className="mb-30">
                  <CalculationImbrication />
                </CustomAccordion>
              </div>
              <Box display="flex" justifyContent="center">
                <Button variant="contained" color="primary" type="submit">
                  Рассчитать
                </Button>
              </Box>
            </form>
          </FormProvider>
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
