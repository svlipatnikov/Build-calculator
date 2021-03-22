import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router';
import { curentCustomerSelector } from 'redux/selectors/curentCustomerSelector';
import { getCurrentCustomer } from 'redux/actions/curentCustomerAction';
import { makeStyles } from '@material-ui/core/styles';
import { Avatar } from '@material-ui/core';
import CustomerInfo from '../CustomerInfo';

const Client = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const location = useLocation();
  const [isModalOpened, setIsModalOpened] = useState(false);
  const customer = useSelector(curentCustomerSelector);

  useEffect(() => {
    const customerId = new URLSearchParams(location.search).get('id');

    if (!customer.id && customerId) {
      dispatch(getCurrentCustomer(customerId));
    }
    // eslint-disable-next-line
  }, []);

  const handleClick = () => {
    setIsModalOpened(true);
  };

  if (!customer.id) return null;

  const { lastName, firstName, secondName } = customer;

  return (
    <>
      <div
        className={classes.customer}
        onClick={handleClick}
        onKeyDown={handleClick}
        role="button"
        tabIndex="0">
        <Avatar sizes="20" className={classes.customerAvatar}>
          {firstName.charAt(0) + lastName.charAt(0)}
        </Avatar>
        <p className={classes.text}>
          {`${lastName} ${firstName}`}
          <br />
          {secondName}
        </p>
      </div>
      {isModalOpened && <CustomerInfo open={isModalOpened} setOpen={setIsModalOpened} clientData={customer} />}
    </>
  );
};

const useStyles = makeStyles(() => ({
  customer: {
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    borderLeft: '1px solid #ccc',
    paddingLeft: 10,
    '& p': {
      fontSize: 13,
      '&:hover': {
        textDecoration: 'underline',
      },
    },
  },
  customerAvatar: {
    width: 30,
    height: 30,
    fontSize: 14,
    marginRight: 7,
    backgroundColor: '#b08989',
  },
}));

export default Client;
