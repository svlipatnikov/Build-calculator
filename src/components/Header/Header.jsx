import React from 'react'
import { Link } from 'react-router-dom';
import { AppBar, Button, Toolbar } from '@material-ui/core'
import { AccountCircle } from '@material-ui/icons'
import Logo from '../../assets/logo.svg'
import './Header.scss'

const Header = () => (
  <AppBar className="appbar" position="static">
    <Toolbar className="toolbar">
      <div className="d-flex">
        <Link to="/">
          <img src={Logo} alt="logo" className="logo" />
        </Link>

        <Button color="inherit" size="small" className="client">
          Клиент:<br />
          Тестовый Тест Тестович<br />
          г. Ульяновск, ул. Тестовая, д. 35<br />
          Тел: 8-900-000-00-00
        </Button>
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
)

export default Header