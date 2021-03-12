/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { AppBar, Toolbar, useMediaQuery } from '@material-ui/core';
import User from './UserAvatar';
import Client from './ClientAvatar';
import AdaptiveMenu from './AdaptiveMenu';
import Logo from '../../assets/logo.svg';

const Header = () => {
  const location = useLocation();
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down('xs'));
  const classes = useStyles();

  if (location.pathname === '/login') return null;

  return (
    <AppBar position="static">
      <Toolbar>
        <Link to="/">
          <img src={Logo} alt="logo" className={classes.logo} />
        </Link>

        {mobile
          ? <AdaptiveMenu />
          : (
            <div className={classes.flex}>
              <Client />
              <User />
            </div>
          )}
      </Toolbar>
    </AppBar>
  );
};

const useStyles = makeStyles((theme) => ({
  flex: {
    display: 'flex',
    alignItems: 'center',
  },
  logo: {
    maxHeight: 56,
    filter: 'brightness(0) invert(1)',
    [theme.breakpoints.down('xs')]: {
      maxHeight: 48,
    },
  },
}));

export default Header;
