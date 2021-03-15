import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button, Container, Typography } from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { makeStyles } from '@material-ui/core/styles';
import { customersListCalc } from '../../redux/selectors/customer-calcSelector';
import { setListCalc } from '../../redux/actions/customer-calcAction';

import TableCustomers from './TableCustomers';

// Этот массив тестовый, будем получать с сервера в redux
const calc = [
  {
    id: 1,
    name: 678678,
    date: '03-03-2021',
    status: 'Актуален',
    address: 'г. Ульяновск, и тд',
    floor: 3,
  },
  {
    id: 2,
    name: 25435435,
    date: '03-03-2021',
    status: 'Не актуален',
    address: 'г. Ульяновск, и тд',
    floor: 5,
  },
  {
    id: 3,
    name: 17567657,
    date: '03-03-2021',
    status: 'Заключен договор',
    address: 'г. Ульяновск, и тд',
    floor: 1,
  },
];

const CustomerPage = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const rows = useSelector(customersListCalc);

  useEffect(() => {
    dispatch(setListCalc(calc));
  }, [dispatch]);

  return (
    <main>
      <Container maxWidth="lg">
        <div className={classes.mainNav}>
          <Typography variant="h4" color="textPrimary" align="center">
            <Link to="/customers">
              <Button className={classes.btnArrow}>
                <ArrowBackIcon fontSize="large" className={classes.arrowBack} />
              </Button>
            </Link>
            Карточка клиента
          </Typography>
        </div>
        <div className={classes.mainCanculation}>
          <Link to="/calculation/new">
            <Button variant="contained" color="primary">
              Создать расчет
            </Button>
          </Link>
        </div>
        <div className={classes.mainTable}>
          <TableCustomers rows={rows} />
        </div>
      </Container>
    </main>
  );
};

export default CustomerPage;

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  mainCanculation: {
    marginTop: theme.spacing(5),
  },
  mainTable: {
    marginTop: theme.spacing(5),
  },
  mainNav: {
    position: 'relative',
  },
  btnArrow: {
    position: 'absolute',
    top: 0,
    left: 0,
  },
}));
