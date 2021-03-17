import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button, Container, Typography } from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { makeStyles } from '@material-ui/core/styles';
import { customersListCalc } from '../../redux/selectors/customerCalcSelector';
import changeFlag from '../../redux/selectors/changeFlagSelector';
import { getCalculation } from '../../redux/actions/customerCalcAction';

import TableCustomers from './TableCustomers';

const CustomerPage = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const rows = useSelector(customersListCalc);
  const isChange = useSelector(changeFlag);

  useEffect(() => {
    if (isChange) {
      dispatch(getCalculation());
    }
  }, [dispatch, isChange]);

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
