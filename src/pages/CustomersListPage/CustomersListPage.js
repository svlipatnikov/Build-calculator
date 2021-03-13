/* eslint-disable camelcase */
/* eslint-disable no-console */
import React, { useEffect } from 'react';
import { Container, Typography, Grid, Button } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import customersListSelector from 'redux/selectors/customersListSelector';
import setCustomersListAction from 'redux/actions/customersListAction';
import { makeStyles } from '@material-ui/core/styles';
import sendRequest from 'api';
import CustomerCard from './CustomerCard';

const CustomersListPage = () => {
  const dispatch = useDispatch();
  const storeCustomers = useSelector(customersListSelector);
  const classes = useStyles();

  useEffect(() => {
    sendRequest('/customers', 'GET').then((data) => {
      if (data) dispatch(setCustomersListAction(data));
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container maxWidth="lg">
      <Typography variant="h4" color="textPrimary" align="center">
        Клиенты
      </Typography>

      <Button variant="contained" color="primary" className={classes.btn}>
        Создать клиента
      </Button>

      {storeCustomers && (
        <Grid container spacing={3}>
          {storeCustomers.map(({ id, last_name, first_name, second_name, phone, email, adress }) => (
            <Grid key={id} item xs={12} sm={6} md={4} lg={3}>
              <CustomerCard
                id={id}
                lastName={last_name}
                firstName={first_name}
                secondName={second_name}
                phone={phone}
                email={email}
                adress={adress}
              />
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
};

export default CustomersListPage;

const useStyles = makeStyles((theme) => ({
  btn: {
    marginBottom: theme.spacing(5),
  },
}));
