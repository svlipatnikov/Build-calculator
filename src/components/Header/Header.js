import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { AppBar, Toolbar, useMediaQuery, Container } from '@material-ui/core';
import DesktopMenu from './DesktopMenu';
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
      <Container maxWidth="lg">
        <Toolbar>
          <Link to="/customers">
            <img src={Logo} alt="logo" className={classes.logo} />
          </Link>

          {mobile ? <AdaptiveMenu /> : <DesktopMenu />}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

const useStyles = makeStyles((theme) => ({
  logo: {
    maxHeight: 56,
    filter: 'brightness(0) invert(1)',
    [theme.breakpoints.down('xs')]: {
      maxHeight: 48,
    },
  },
}));

export default Header;
