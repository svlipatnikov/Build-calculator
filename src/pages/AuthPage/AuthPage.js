/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable object-curly-newline */
import { Grid, Typography, TextField, Button } from '@material-ui/core';
import React, { useState } from 'react';
import logo from '../../img/calc_logo.svg';

const AuthPage = () => {
  const [login, setLogin] = useState('');
  const [pass, setPass] = useState('');

  const submit = () => {
    setLogin('');
    setPass('');
    // здесь нужно оправть логин и пароль на бэк
  };

  const handleLoginChange = (event) => {
    setLogin(event.target.value);
  };

  const handlePassChange = (event) => {
    setPass(event.target.value);
  };

  return (
    <form style={{ overflow: 'hidden' }}>
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        spacing={4}
        style={{ minHeight: '100vh' }}>
        <Grid item container direction="row" justify="center" alignItems="center">
          <img alt="Logo" src={logo} style={{ height: '150px', marginRight: '16px' }} />
          <Typography variant="h4" color="primary" style={{ textTransform: 'uppercase' }}>
            строительный
            <br />
            калькулятор
          </Typography>
        </Grid>

        <Grid item>
          <TextField
            style={{
              width: '450px',
              backgroundColor: '#ffffff',
            }}
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
            style={{
              width: '450px',
              backgroundColor: '#ffffff',
            }}
            id="pass"
            label="Введите пароль"
            variant="outlined"
            color="secondary"
            onChange={handlePassChange}
            value={pass}
          />
        </Grid>

        <Grid item>
          <Button
            variant="contained"
            color="primary"
            style={{
              width: '285px',
              height: '59px',
              fontSize: '18px',
            }}
            onClick={submit}>
            Войти
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default AuthPage;
