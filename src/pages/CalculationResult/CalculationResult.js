/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable import/no-extraneous-dependencies */
import React, { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

import currentCalculation from 'redux/selectors/currentCalculationSelector';
import { getCurrentCalculation } from 'redux/actions/currentCalculationAction';

import { makeStyles } from '@material-ui/core/styles';
import { ArrowBack } from '@material-ui/icons';
import { Typography, Button, Box } from '@material-ui/core';
import CustomAccordion from '../../components/CustomAccordion';
import CalculationResultTable from './CalculationResultTable';
import { groupBy } from '../../help/helpers';

const CalculationResult = () => {
  const { customerId, calcId } = useParams();
  const classes = useStyles();
  const dispatch = useDispatch();
  const calculation = useSelector(currentCalculation);

  useEffect(() => {
    if (!calculation.id || calculation.id !== +calcId) {
      dispatch(getCurrentCalculation(calcId));
    }
    // eslint-disable-next-line
  }, []);

  const createdDate = useMemo(() => new Date(calculation.created_date).toLocaleDateString('ru-RU'), [
    calculation.created_date,
  ]);

  const results = useMemo(() => {
    if (calculation.results) {
      const floorsData = groupBy(calculation.results, 'floor');

      Object.keys(floorsData).forEach((floorNumber) => {
        floorsData[floorNumber] = groupBy(floorsData[floorNumber], 'name');
      });

      return floorsData;
    }

    return {};
  }, [calculation.results]);

  const total = useMemo(() => {
    if (calculation.results) {
      const resultsSum = calculation.results.reduce((sum, result) => sum + result.full_price, 0);
      return resultsSum.toFixed(2);
    }

    return 0;
  }, [calculation.results]);

  if (!calculation.id) return null;

  return (
    <>
      <Link to={`/customers/${customerId}`}>
        <Button>
          <ArrowBack fontSize="large" />
        </Button>
      </Link>

      <Typography variant="h4" align="center">
        Расчет
      </Typography>

      <Box className={classes.calculationInfo}>
        <Typography variant="body1">Дата: {createdDate}</Typography>
        <Typography variant="body1" className={classes.address}>
          Адрес объекта: <span>{calculation.adress_object_construction}</span>
        </Typography>
        <Typography variant="body1">Статус: {calculation.state_calculation}</Typography>
      </Box>

      <CustomAccordion title="Результат расчета каркаса" className={classes.mb0}>
        {Object.entries(results).map(([floorNumber, floorData]) => (
          <Box>
            <Typography variant="body1" className={classes.title}>
              Результат расчета {floorNumber} этажа
            </Typography>
            <CalculationResultTable data={floorData} />
          </Box>
        ))}

        <Box className={classes.total}>
          <Typography variant="h6">Итого стоимость материалов:</Typography>
          <Typography variant="h6">{total} руб.</Typography>
        </Box>
      </CustomAccordion>
    </>
  );
};

const useStyles = makeStyles(() => ({
  mb0: {
    marginBottom: '0 !important',
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
  title: {
    fontSize: 16,
    fontWeight: 600,
    marginBottom: 20,
  },
  total: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    '& h6': {
      fontSize: 16,
    },
  },
}));

export default CalculationResult;
