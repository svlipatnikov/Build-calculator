/* eslint-disable react/jsx-curly-brace-presence */
/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable no-use-before-define */
/* eslint-disable object-curly-newline */
import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, Typography, Box, TextField } from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { makeStyles } from '@material-ui/core/styles';

import BoxForm from './BoxForm';
import BoxFormSelect from './BoxFormSelect';
import CustomAccordion from '../../components/CustomAccordion/CustomAccordion';
import CalculationImbrication from './CalculationImbrication';
import DoorAndWindow from './DoorAndWindow';

const CalculationFormPage = () => {
  const classes = useStyles();

  return (
    <main>
      <Container maxWidth="lg">
        <div className={classes.mainNav}>
          <Typography variant="h3" color="textPrimary" align="center">
            <Link to="/customers/:id">
              <Button className={classes.btnArrow}>
                <ArrowBackIcon fontSize="large" className={classes.arrowBack} />
              </Button>
            </Link>
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
            />
            <Button
              variant="contained"
              color="primary"
              style={{ height: '38px', width: '150px', marginRight: '16px' }}>
              Сохранить
            </Button>
            <Button variant="contained" color="primary" style={{ height: '38px', width: '150px' }}>
              Очистить расчет
            </Button>
          </Box>
        </div>
        <div className={classes.mainSourceData}>
          <Box css={{ fontSize: 16, fontWeight: 700 }}>Исходные данные</Box>
          <BoxForm name={'Количество этажей'} />
          <Box css={{ fontSize: 16, fontWeight: 700 }}>1 Этаж</Box>
          <BoxForm name={'Высота этажа'} />
          <BoxForm name={'Периметр внешних стен'} />
          <BoxForm name={'Площадь основания'} />
          <BoxFormSelect name={'Толщина внешних стен'} />
          <BoxForm name={'Длина внутренних стен'} />
          <div className={classes.outWall}>
            <Box css={{ fontSize: 16, fontWeight: 700 }}>Обшивка внешних стен</Box>
            <BoxFormSelect name={'ОСБ'} />
            <BoxFormSelect name={'Парогидроизоляция'} />
            <BoxFormSelect name={'Ветрозащита'} />
            <BoxFormSelect name={'Утеплитель'} />
            <CustomAccordion title="Добавить расчет обшивки внутренних стен" className="mb-30">
              <BoxFormSelect name={'ОСБ'} />
            </CustomAccordion>
            <CustomAccordion title="Учесть двери и окна" className="mb-30">
              <DoorAndWindow />
            </CustomAccordion>
            <CustomAccordion title="Добавить расчет перекрытий" className="mb-30">
              <CalculationImbrication />
            </CustomAccordion>
          </div>
          <Box display="flex" justifyContent="center">
            <Button variant="contained" color="primary">
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
