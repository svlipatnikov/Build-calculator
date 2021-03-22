import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { Button, Container, Typography } from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { makeStyles } from '@material-ui/core/styles';
import { clearCurentCustomerAction } from 'redux/actions/curentCustomerAction';
import { customersListCalc } from '../../redux/selectors/customerCalcSelector';
import changeFlag from '../../redux/selectors/customerChangeFlagSelector';
import { getCalculation } from '../../redux/actions/customerCalcAction';

import TableCustomers from './TableCustomers';

const CustomerPage = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const classes = useStyles();
  const rows = useSelector(customersListCalc);
  const isChanged = useSelector(changeFlag);

  useEffect(() => {
    if (isChanged) {
      dispatch(getCalculation());
    }
  }, [dispatch, isChanged]);

  const handleBackClick = () => {
    dispatch(clearCurentCustomerAction());
    history.push('/customers');
  };

  return (
    <main>
      <Container maxWidth="lg">
        <div className={classes.mainNav}>
          <Typography variant="h4" color="textPrimary" align="center">
            <Button className={classes.btnArrow} onClick={handleBackClick}>
              <ArrowBackIcon fontSize="large" className={classes.arrowBack} />
            </Button>
            Карточка клиента
          </Typography>
        </div>
        <div className={classes.mainCanculation}>
          {/* eslint-disable-next-line */}
          <Link to={{ pathname: '/calculation/new', search: location.search }}>
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
