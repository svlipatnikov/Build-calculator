import React, { useState } from 'react';
import { Drawer, IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Menu, Close } from '@material-ui/icons';
import Client from './ClientAvatar';
import User from './UserAvatar';

const AdaptiveHeader = () => {
  const [open, setOpen] = useState(false);
  const classes = useStyles();

  const toggleMenu = () => setOpen(!open);

  return (
    <>
      <IconButton color="inherit" onClick={toggleMenu}>
        <Menu />
      </IconButton>
      <Drawer anchor="right" open={open} onClose={toggleMenu} className={classes.drawer}>
        <IconButton color="inherit" onClick={toggleMenu} className={classes.close}>
          <Close />
        </IconButton>
        <div className={classes.content}>
          <Client />
          <User />
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
    }
  },
  close: {
    position: 'absolute',
    top: 25,
    right: 25,
  },
  content: {
    '& > div': {
      margin: '0 0 30px 0',
    }
  }
}));

export default AdaptiveHeader;