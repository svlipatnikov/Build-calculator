/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable camelcase */
import React, { useEffect } from 'react';
import { Container, Typography, Grid } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import customersListSelector from 'redux/selectors/customersListSelector';
import setCustomersListAction from 'redux/actions/customersListAction';
import sendRequest from 'api';
import CustomerInfo from 'components/CustomerInfo';
import CustomerCard from './CustomerCard';

const CustomersListPage = () => {
  const dispatch = useDispatch();
  const storeCustomers = useSelector(customersListSelector);

  useEffect(() => {
    sendRequest('/customers', 'GET').then((data) => {
      if (data) dispatch(setCustomersListAction(data));
    });
  }, []);

  return (
    <Container maxWidth="lg">
      <Typography variant="h4" color="textPrimary" align="center">
        Клиенты
      </Typography>

      <CustomerInfo />

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
