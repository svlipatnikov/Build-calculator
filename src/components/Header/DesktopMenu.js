import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { ExitToApp } from '@material-ui/icons';
import { Button, Menu, ListItemIcon, MenuItem, ListItemText } from '@material-ui/core';
import logout from 'api/logout';
import User from './UserAvatar';
import Customer from './CustomerAvatar';

const Header = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    logout();
  };

  return (
    <div className={classes.flex}>
      <Button color="inherit" onClick={handleClick}>
        <User />
      </Button>
      <Customer />
      <Menu
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        className={classes.menu}
        getContentAnchorEl={null}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
      >
        <MenuItem onClick={handleLogout}>
          <ListItemIcon className={classes.exitIcon}>
            <ExitToApp />
          </ListItemIcon>
          <ListItemText primary="Выйти" />
        </MenuItem>
      </Menu>
    </div>
  );
};

const useStyles = makeStyles(() => ({
  flex: {
    display: 'flex',
    flexDirection: 'row-reverse',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  exitIcon: {
    minWidth: 30,
  },
}));

export default Header;
