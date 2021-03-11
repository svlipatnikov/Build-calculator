/* eslint-disable no-use-before-define */
/* eslint-disable object-curly-newline */
import React, { useState } from 'react';
import { Grid, Typography, TextField, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import logo from '../../assets/calc_logo.svg';

const AuthPage = () => {
  const [login, setLogin] = useState('');
  const [pass, setPass] = useState('');
  const classes = useStyles();

  const submit = () => {
    setLogin('');
    setPass('');
    // здесь нужно отправть логин и пароль на бэк
  };

  const handleLoginChange = (event) => {
    setLogin(event.target.value);
  };

  const handlePassChange = (event) => {
    setPass(event.target.value);
  };

  return (
    <form className={classes.form}>
      <Grid container direction="column" justify="center" alignItems="center" spacing={4}>
        <Grid item container direction="row" justify="center" alignItems="center">
          <img className={classes.logoImg} alt="Logo" src={logo} />
          <Typography className={classes.logoText} variant="h4" color="primary">
            строительный
            <br />
            калькулятор
          </Typography>
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
            onChange={handlePassChange}
            value={pass}
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

const useStyles = makeStyles((theme) => ({
  form: {
    minHeight: '100vh',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoImg: {
    height: '150px',
  },
  logoText: {
    textTransform: 'uppercase',
    margin: theme.spacing(3),
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
