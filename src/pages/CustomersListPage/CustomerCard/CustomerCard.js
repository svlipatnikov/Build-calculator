import React from 'react';
import { useHistory } from 'react-router';
import { Typography, CardContent, Card, CardActionArea } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { setCurentCustomerAction } from 'redux/actions/curentCustomerAction';

const CustomerCard = ({ id, name, info }) => {
  const history = useHistory();
  const dispatch = useDispatch();

  if (!id || !name) return null;

  const handleClick = () => {
    history.push(`/customers/${id}`);
    // запоминаем в store текущего заказчика
    dispatch(setCurentCustomerAction({ id, name, info }));
  };

  return (
    <Card>
      <CardActionArea onClick={handleClick}>
        <CardContent>
          <Typography variant="h5" component="h2" color="textPrimary" gutterBottom>
            {name}
          </Typography>

          <Typography color="textSecondary">{info}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default CustomerCard;
