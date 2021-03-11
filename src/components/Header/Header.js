/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AppBar, Avatar, Toolbar } from '@material-ui/core';
import { AccountCircle } from '@material-ui/icons';
import Logo from '../../assets/logo.svg';
import './Header.scss';

const Header = () => {
  const location = useLocation();

  const name = 'Клиент';
  const lastName = 'Клиентовый';
  const patronymic = 'Клиентович';

  const openModal = () => {};

  if (location.pathname === '/') return null;

  return (
    <AppBar className="appbar" position="static">
      <Toolbar className="toolbar">
        <div className="d-flex">
          <Link to="/">
            <img src={Logo} alt="logo" className="logo" />
          </Link>

          <div className="d-flex client" onClick={openModal}>
            <Avatar sizes="20">{name.charAt(0) + lastName.charAt(0)}</Avatar>
            <p>
              {lastName} {name} {patronymic}
            </p>
          </div>
        </div>

        <div className="d-flex account">
          <AccountCircle />

          <div>
            <p>Тест Тестовый</p>
            <span>Тестировщик</span>
          </div>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
