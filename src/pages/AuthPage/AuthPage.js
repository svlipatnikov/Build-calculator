import React, { useState } from 'react';
import { TextField, Button, Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import logo from 'assets/logo.svg';
import { useDispatch, useSelector } from 'react-redux';
import { clearError, setAuthFlag } from 'redux/actions/appStateAction';
import { useHistory } from 'react-router-dom';
import sendRequest from 'api';
import { errorSelector } from 'redux/selectors/appStateSelector';

const AuthPage = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const { isError, statusCode } = useSelector(errorSelector);

  const submit = (event) => {
    event.preventDefault();
    if (login && password) {
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
    }
  };

  const handleLoginChange = (event) => {
    setLogin(event.target.value);
    dispatch(clearError());
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    dispatch(clearError());
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

          {isError && statusCode === 401 && (
            <Box maxWidth="380px">
              <Typography color="error" variant="h6" align="center">
                Неправильные данные для входа. Пожалуйста, попробуйте снова
              </Typography>
            </Box>
          )}
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
    width: '100%',
    fontSize: '1.2rem',
  },
}));
