import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import setAuthFlagAction from 'redux/actions/setAuthFlagAction';
import { Drawer, IconButton, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Menu, Close } from '@material-ui/icons';
import Client from './ClientAvatar';
import User from './UserAvatar';

const AdaptiveHeader = () => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();
  const classes = useStyles();

  const handleClick = () => setOpen(!open);

  const handleLogout = () => {
    localStorage.removeItem('access_token');
    dispatch(setAuthFlagAction(false));
    history.push('/login');
    handleClick();
  };

  return (
    <>
      <IconButton color="inherit" onClick={handleClick}>
        <Menu />
      </IconButton>
      <Drawer anchor="right" open={open} onClose={handleClick} className={classes.drawer}>
        <IconButton color="inherit" onClick={handleClick} className={classes.close}>
          <Close />
        </IconButton>
        <div className={classes.content}>
          <Client />
          <User />
          <Button color="inherit" variant="outlined" onClick={handleLogout}>
            Выйти
          </Button>
        </div>
      </Drawer>
    </>
  );
};

const useStyles = makeStyles(() => ({
  drawer: {
    '& .MuiDrawer-paper': {
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#0A2973',
      position: 'relative',
      color: 'white',
    },
  },
  close: {
    position: 'absolute',
    top: 25,
    right: 25,
  },
  content: {
    textAlign: 'center',
    '& > div': {
      margin: '0 0 30px 0',
    },
  },
}));

export default AdaptiveHeader;
