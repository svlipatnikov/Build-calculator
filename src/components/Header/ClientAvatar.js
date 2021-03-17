import React from 'react';
import { useSelector } from 'react-redux';
import curentCustomerSelector from 'redux/selectors/curentCustomerSelector';
import { makeStyles } from '@material-ui/core/styles';
import { Avatar } from '@material-ui/core';

const Client = () => {
  const classes = useStyles();
  const client = useSelector(curentCustomerSelector);

  // TODO: create open modal function
  const handleClick = () => {};

  if (!client.id) return null;
  const { lastName, firstName, secondName } = client;

  return (
    <div className={classes.client} onClick={handleClick} onKeyDown={handleClick} role="button" tabIndex="0">
      <Avatar sizes="20" className={classes.clientAvatar}>
        {firstName.charAt(0) + lastName.charAt(0)}
      </Avatar>
      <p className={classes.text}>
        {`${lastName} ${firstName}`}
        <br />
        {secondName}
      </p>
    </div>
  );
};

const useStyles = makeStyles(() => ({
  client: {
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
  clientAvatar: {
    width: 30,
    height: 30,
    fontSize: 14,
    marginRight: 7,
    backgroundColor: '#b08989',
  },
}));

export default Client;
