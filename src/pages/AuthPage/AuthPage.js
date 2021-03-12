import React, { useState } from 'react';
import { Grid, TextField, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import logo from 'assets/logo.svg';
import { useDispatch, useSelector } from 'react-redux';
import setAuthFlagAction from 'redux/actions/authInfoAction';
import { isAuthenticatedSelector } from 'redux/selectors/authInfoSelector';
import { useHistory } from 'react-router-dom';

const AuthPage = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const isAuthenticated = useSelector(isAuthenticatedSelector);

  if (isAuthenticated) history.push('/customers');

  const submit = () => {
    setLogin('');
    setPassword('');
    // здесь нужно отправть логин и пароль на бэк
    if (login === 'admin' || password === 'admin') dispatch(setAuthFlagAction(true));
  };

  const handleLoginChange = (event) => {
    setLogin(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
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
            onChange={handlePasswordChange}
            value={password}
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
