import React, { useEffect } from 'react';
import { Container, Typography, Grid, Button } from '@material-ui/core';
import CustomerCard from './CustomerCard';
import { useDispatch, useSelector } from 'react-redux';
import { customersListSelector } from 'redux/selectors/customersListSelector';
import { setCustomersListAction } from 'redux/actions/customersListAction';
import { makeStyles } from '@material-ui/core/styles';

// TODO: тестовые данные, удалить после подключения сервера
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
  const dispatch = useDispatch();
  const storeClients = useSelector(customersListSelector);
  const classes = useStyles();

  useEffect(() => {
    if (!storeClients.length) {
      // TODO: заменить на получение массива clients с сервера
      dispatch(setCustomersListAction(clients));
    }
  }, [dispatch, storeClients.length]);

  return (
    <Container maxWidth="lg">
      <Typography variant="h4" color="textPrimary" align="center">
        Клиенты
      </Typography>

      <Button variant="contained" color="primary" className={classes.btn}>
        Создать клиента
      </Button>

      <Grid container spacing={3}>
        {storeClients.map(({ id, name, info }) => (
          <Grid key={id} item xs={12} sm={6} md={4} lg={3}>
            <CustomerCard id={id} name={name} info={info} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default CustomersListPage;

const useStyles = makeStyles((theme) => ({
  btn: {
    marginBottom: theme.spacing(5),
  },
}));
