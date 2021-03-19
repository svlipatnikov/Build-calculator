/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable import/no-extraneous-dependencies */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

import currentCalculation from 'redux/selectors/currentCalculationSelector';
import { getCurrentCalculation } from 'redux/actions/currentCalculationAction';

import { makeStyles } from '@material-ui/core/styles';
import { Update, Edit, ArrowBack } from '@material-ui/icons';
import { Typography, Button, Tooltip, Box } from '@material-ui/core';
import CustomAccordion from '../../components/CustomAccordion';
import CalculationResultTable from './CalculationResultTable';

const CalculationResult = () => {
  const { id } = useParams();
  const classes = useStyles();
  const dispatch = useDispatch();
  const calculation = useSelector(currentCalculation);

  useEffect(() => {
    if (!calculation.id) {
      dispatch(getCurrentCalculation(id));
    }
    // eslint-disable-next-line
  }, []);

  if (!calculation.id) return null;

  const createdDate = new Date(calculation.created_date)
    .toLocaleString('ru-RU', { year: 'numeric', month: '2-digit', day: '2-digit' });

  const results = calculation.results.reduce((acc, result) => {
    const current = acc[acc.length - 1];

    if (current.some((p) => p.name === result.name)) {
      acc.push([result]);
    } else current.push(result);

    return acc;
  }, [[]]);

  return (
    <>
      {/* eslint-disable-next-line */}
      <Link to={{ pathname: `/calculationedit/${id}`, search: location.search }}>
        <Button>
          <ArrowBack fontSize="large" />
        </Button>
      </Link>

      <Typography variant="h4" align="center">
        Расчет
      </Typography>

      <div className={classes.right}>
        <Tooltip title="Сменить статус">
          <Button variant="outlined" color="primary" className={classes.button}>
            <Update />
          </Button>
        </Tooltip>
        <Tooltip title="Редактировать">
          {/* eslint-disable-next-line */}
          <Link to={{ pathname: `/calculationedit/${id}`, search: location.search }}>
            <Button color="primary" variant="outlined" className={classes.button}>
              <Edit />
            </Button>
          </Link>
        </Tooltip>
      </div>

      <Box className={classes.calculationInfo}>
        <Typography variant="body1">Дата: {createdDate}</Typography>
        <Typography variant="body1" className={classes.address}>
          Адрес объекта: <span className={classes.capitalize}>{calculation.adress_object_construction}</span>
        </Typography>
      </Box>

      <CustomAccordion title="Результат расчета каркаса" className={classes.mb30}>
        {results.map((floorData, floorNumber) => (
          <Box>
            <Typography variant="body1" className={classes.title}>Результат расчета {floorNumber + 1} этажа</Typography>
            <CalculationResultTable data={floorData} />
          </Box>
        ))}
      </CustomAccordion>

      <div className={classes.right}>
        <Button className={classes.green}>Добавить расчет</Button>
      </div>
    </>
  );
};

const useStyles = makeStyles(() => ({
  mb30: {
    marginBottom: 30,
  },
  right: {
    textAlign: 'right',
  },
  green: {
    color: 'white',
    border: '1px solid transparent',
    backgroundColor: '#146c43',
    transition: '0.5s',
    '&:hover': {
      backgroundColor: '#0e5333',
    },
  },
  button: {
    minWidth: 'unset',
    padding: 6,
    marginRight: 5,
  },
  calculationInfo: {
    marginLeft: 10,
    marginBottom: 16,
  },
  capitalize: {
    textTransform: 'capitalize',
  },
  title: {
    fontSize: 16,
    fontWeight: 600,
    marginBottom: 20,
  },
}));

export default CalculationResult;
