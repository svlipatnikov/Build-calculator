import React from 'react';
import { useSelector } from 'react-redux';
import { userSelector } from 'redux/selectors/userSelector';
import { makeStyles } from '@material-ui/core/styles';
import { AccountCircle } from '@material-ui/icons';

const User = () => {
  const classes = useStyles();
  const user = useSelector(userSelector);

  return (
    <div className={classes.account}>
      <AccountCircle className={classes.accountAvatar} />

      <div>
        <p className={classes.text}>{user.name}</p>
        <span className={classes.span}>{user.position}</span>
      </div>
    </div>
  );
};

const useStyles = makeStyles(() => ({
  account: {
    display: 'flex',
    alignItems: 'center',
    borderLeft: '1px solid #ccc',
    paddingLeft: 10,
    marginLeft: 10,
    lineHeight: 1.2,
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