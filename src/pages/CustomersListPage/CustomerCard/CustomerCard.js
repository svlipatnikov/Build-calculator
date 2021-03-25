import React from 'react';
import { useHistory } from 'react-router-dom';
import { Typography, CardContent, Card, CardActionArea } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { setCurrentCustomerId } from 'redux/actions/currentCustomerAction';
import PropTypes from 'prop-types';

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
          <Typography color="textSecondary">{`Телефон: ${phone}`}</Typography>
          <Typography color="textSecondary">{`E-mail: ${email}`}</Typography>
          <Typography color="textSecondary">{`Адрес: ${adress}`}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

CustomerCard.propTypes = {
  id: PropTypes.number.isRequired,
  lastName: PropTypes.string.isRequired,
  firstName: PropTypes.string.isRequired,
  secondName: PropTypes.string,
  phone: PropTypes.string.isRequired,
  email: PropTypes.string,
  adress: PropTypes.string,
};

CustomerCard.defaultProps = {
  secondName: '',
  email: '',
  adress: '',
};

export default CustomerCard;
