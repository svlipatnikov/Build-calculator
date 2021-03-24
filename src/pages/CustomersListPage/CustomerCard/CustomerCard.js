/* eslint-disable react/prop-types */
import React from 'react';
import { useHistory } from 'react-router-dom';
import { Typography, CardContent, Card, CardActionArea } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { setCurrentCustomerId } from 'redux/actions/currentCustomerAction';

const CustomerCard = ({ id, lastName, firstName, secondName, phone, email, adress }) => {
  const history = useHistory();
  const dispatch = useDispatch();

  if (!id) return null;

  const handleClick = () => {
    dispatch(setCurrentCustomerId(id));
    history.push(`/customers/${id}`);
  };

  return (
    <Card>
      <CardActionArea onClick={handleClick}>
        <CardContent>
          <Typography variant="h5" component="h2" color="textPrimary" gutterBottom>
            {`${lastName} ${firstName} ${secondName}`}
          </Typography>
          <Typography color="textSecondary">{`Phone: ${phone}`}</Typography>
          <Typography color="textSecondary">{`E-mail: ${email}`}</Typography>
          <Typography color="textSecondary">{`Adress: ${adress}`}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default CustomerCard;
