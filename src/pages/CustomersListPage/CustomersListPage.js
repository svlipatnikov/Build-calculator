import React, { useEffect, useState } from 'react';
import { Container, Typography, Grid, Button, Box } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { customersListSelector, isChangedCustomersListSelector } from 'redux/selectors/customersListSelector';
import { getCustomersList } from 'redux/actions/customersListAction';
import { clearCurrentCustomerAction } from 'redux/actions/currentCustomerAction';
import CustomerInfo from 'components/CustomerInfo';
import CustomerCard from './CustomerCard';

const CustomersListPage = () => {
  const [openModal, setOpenModal] = useState(false);
  const dispatch = useDispatch();
  const storeCustomers = useSelector(customersListSelector);
  const isChanged = useSelector(isChangedCustomersListSelector);

  useEffect(() => {
    dispatch(clearCurrentCustomerAction());
    if (isChanged) {
      dispatch(getCustomersList());
    }
  }, [dispatch, isChanged]);

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  return (
    <Container maxWidth="lg">
      <Typography variant="h4" color="textPrimary" align="center">
        Клиенты
      </Typography>

      <Box my={5}>
        <Button variant="contained" color="primary" onClick={handleOpenModal}>
          Создать клиента
        </Button>
      </Box>

      <CustomerInfo open={openModal} setOpen={setOpenModal} />

      {storeCustomers && (
        <Grid container spacing={3}>
          {storeCustomers.map(({ id, lastName, firstName, secondName, phone, email, adress }) => (
            <Grid key={id} item xs={12} sm={6} md={4} lg={3}>
              <CustomerCard
                id={id}
                lastName={lastName}
                firstName={firstName}
                secondName={secondName}
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
