import React, { useState } from 'react';
import { Grid, TextField, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import logo from 'assets/logo.svg';
import { useDispatch, useSelector } from 'react-redux';
import { setAuthFlagAction } from 'redux/actions/auth';
import { authSelector } from 'redux/selectors';
import { useHistory } from 'react-router-dom';

const AuthPage = () => {
  const [login, setLogin] = useState('');
  const [psw, setPsw] = useState('');
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const isAuth = useSelector(authSelector);

  if (isAuth) history.push('/customers');

  const submit = () => {
    setLogin('');
    setPsw('');
    // здесь нужно отправть логин и пароль на бэк
    if (login === 'admin' || psw === 'admin') dispatch(setAuthFlagAction(true));
  };

  const handleLoginChange = (event) => {
    setLogin(event.target.value);
  };

  const handlePswChange = (event) => {
    setPsw(event.target.value);
  };

  return (
    <form className={classes.form}>
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
          />
        </Grid>

        <Grid item>
          <TextField
            className={classes.formInput}
            id="pass"
            label="Введите пароль"
            variant="outlined"
            color="secondary"
            onChange={handlePswChange}
            value={psw}
            type="password"
          />
        </Grid>

        <Grid item>
          <Button className={classes.formBtn} variant="contained" color="primary" onClick={submit}>
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
