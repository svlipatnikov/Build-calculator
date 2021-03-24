import React, { useState } from 'react';
import { Drawer, IconButton, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Menu, Close } from '@material-ui/icons';
import logout from 'api/logout';
import Customer from './CustomerAvatar';
import User from './UserAvatar';

const AdaptiveHeader = () => {
  const [open, setOpen] = useState(false);
  const classes = useStyles();

  const handleClick = () => setOpen(!open);

  const handleLogout = () => {
    logout();
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
          <Customer />
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
