/* eslint-disable arrow-body-style */
import React from 'react';
import { Container, Typography, Grid } from '@material-ui/core';
import CustomerCard from './CustomerCard';

const clients = [
  { id: 1, name: 'Клиентов Клиент Клиентович', info: 'Инфо о клиенте' },
  { id: 2, name: 'Клиентов Клиент Клиентович', info: 'Инфо о клиенте' },
  { id: 3, name: 'Клиентов Клиент Клиентович', info: 'Инфо о клиенте' },
  { id: 4, name: 'Клиентов Клиент Клиентович', info: 'Инфо о клиенте' },
  { id: 5, name: 'Клиентов Клиент Клиентович', info: 'Инфо о клиенте' },
  { id: 6, name: 'Клиентов Клиент Клиентович', info: 'Инфо о клиенте' },
  { id: 7, name: 'Клиентов Клиент Клиентович', info: 'Инфо о клиенте' },
];

const CustomersListPage = () => {
  return (
    <Container maxWidth="lg">
      <Typography variant="h4" color="textPrimary" align="center">
        Клиенты
      </Typography>

      <Grid container spacing={3}>
        {clients.map(({ id, name, info }) => (
          <Grid key={id} item xs={12} sm={6} md={4} lg={3}>
            <CustomerCard id={id} name={name} info={info} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default CustomersListPage;
