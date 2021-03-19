import React, { useEffect, useState } from 'react';
import { TextField, Button, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import logo from 'assets/logo.svg';
import { useDispatch } from 'react-redux';
import { setAuthFlag } from 'redux/actions/appStateAction';
import { useHistory } from 'react-router-dom';
import sendRequest from 'api';

const AuthPage = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    localStorage.removeItem('access_token');
  }, []);

  const submit = (event) => {
    event.preventDefault();
    setLogin('');
    setPassword('');

    sendRequest('/auth/jwt/create/', 'POST', { username: login, password }).then((data) => {
      if (data) {
        if (data.access) localStorage.setItem('access_token', data.access);
        if (data.refresh) localStorage.setItem('refresh_token', data.refresh);
        dispatch(setAuthFlag(true));
        history.push('/customers');
      }
    });
  };

  const handleLoginChange = (event) => {
    setLogin(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  return (
    <Box height="100vh" display="flex" alignItems="center" justifyContent="center">
      <form className={classes.form} onSubmit={submit}>
        <Box display="flex" flexDirection="column" alignItems="center">
          <img className={classes.logo} alt="Logo" src={logo} />

          <TextField
            className={classes.formInput}
            margin="dense"
            id="login"
            label="Введите логин"
            variant="outlined"
            color="secondary"
            onChange={handleLoginChange}
            value={login}
            type="text"
            fullWidth
          />

          <TextField
            className={classes.formInput}
            margin="dense"
            id="pass"
            label="Введите пароль"
            variant="outlined"
            color="secondary"
            onChange={handlePasswordChange}
            value={password}
            type="password"
            fullWidth
          />

          <Button className={classes.formBtn} variant="contained" color="primary" type="submit">
            Войти
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default AuthPage;

const useStyles = makeStyles(() => ({
  logo: {
    maxWidth: '100%',
    minWidth: '150px',
  },
  formInput: {
    margin: '4%',
    backgroundColor: '#ffffff',
  },
  formBtn: {
    margin: '4%',
    width: '70%',
    fontSize: '1.2rem',
  },
}));
