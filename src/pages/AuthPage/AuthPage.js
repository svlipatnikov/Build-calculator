import React, { useEffect, useState } from 'react';
import { Grid, TextField, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import logo from 'assets/logo.svg';
import { useDispatch } from 'react-redux';
import setAuthFlagAction from 'redux/actions/authInfoAction';
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
        dispatch(setAuthFlagAction(true));
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
    <form className={classes.form} onSubmit={submit}>
      <Grid container direction="column" justify="center" alignItems="center" spacing={4}>
        <Grid item>
          <img className={classes.logo} alt="Logo" src={logo} />
        </Grid>

        <Grid item>
          <TextField
            className={classes.formInput}
            id="login"
            label="Введите логин"
            variant="outlined"
            color="secondary"
            onChange={handleLoginChange}
            value={login}
            type="text"
          />
        </Grid>

        <Grid item>
          <TextField
            className={classes.formInput}
            id="pass"
            label="Введите пароль"
            variant="outlined"
            color="secondary"
            onChange={handlePasswordChange}
            value={password}
            type="password"
          />
        </Grid>

        <Grid item>
          <Button className={classes.formBtn} variant="contained" color="primary" type="submit">
            Войти
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default AuthPage;

const useStyles = makeStyles(() => ({
  form: {
    minHeight: '100vh',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    height: '150px',
  },
  formInput: {
    width: '450px',
    backgroundColor: '#ffffff',
  },
  formBtn: {
    width: '285px',
    height: '59px',
    fontSize: '18px',
  },
}));
