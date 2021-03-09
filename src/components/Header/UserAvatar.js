import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AccountCircle } from '@material-ui/icons';

const User = () => {
  const classes = useStyles();

  return (
    <div className={classes.account}>
      <AccountCircle className={classes.accountAvatar} />

      <div>
        <p className={classes.text}>Тест Тестовый</p>
        <span className={classes.span}>Тестировщик</span>
      </div>
    </div>
  )
}

const useStyles = makeStyles(() => ({
  account: {
    display: 'flex',
    alignItems: 'center',
    borderLeft: '1px solid #ccc',
    paddingLeft: 10,
    marginLeft: 10,
  },
  accountAvatar: {
    marginRight: 7,
    fontSize: 30,
  },
  span: {
    fontSize: 12,
    marginLeft: 1,
    color: '#b2b2b2',
  },
}));

export default User;