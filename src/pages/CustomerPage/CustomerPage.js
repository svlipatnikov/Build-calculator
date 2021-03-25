/* eslint-disable no-restricted-globals */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { Link, useHistory, useParams } from 'react-router-dom';
import { Button, Container, Typography } from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { makeStyles } from '@material-ui/core/styles';
import {
  calculationSelector,
  currentCustomerIdSelector,
  currentCustomerIsChangedSelector,
} from 'redux/selectors/currentCustomerSelector';
import { getCurrentCustomer } from 'redux/actions/currentCustomerAction';
import frame from '../../assets/frame.svg';
import base from '../../assets/base.svg';
import roof from '../../assets/roof.svg';
import TableCustomers from './TableCustomers';

const CustomerPage = () => {
  const classes = useStyles();
  const rows = useSelector(calculationSelector);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const dispatch = useDispatch();
  const history = useHistory();
  const isChanged = useSelector(currentCustomerIsChangedSelector);
  const currentUserId = useSelector(currentCustomerIdSelector);
  const { customerId } = useParams();

  useEffect(() => {
    if (isChanged) dispatch(getCurrentCustomer(currentUserId));
  }, [dispatch, isChanged, currentUserId]);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleBackClick = () => {
    history.push('/customers');
  };

  return (
    <main>
      <Container maxWidth="lg">
        <div className={classes.mainNav}>
          <Typography variant="h4" color="textPrimary" align="center">
            <Button className={classes.btnArrow} onClick={handleBackClick}>
              <ArrowBackIcon fontSize="large" className={classes.arrowBack} />
            </Button>
            Карточка клиента
          </Typography>
        </div>
        <div className={classes.mainCanculation}>
          <div>
            <Button
              aria-controls="simple-menu"
              aria-haspopup="true"
              onClick={handleClick}
              variant="contained"
              color="primary">
              Создать расчет
            </Button>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}>
              <Link to={`/customers/${customerId}/calculation/new`}>
                <MenuItem onClick={handleClose} className={classes.menuItem}>
                  <img src={frame} alt="frame" className={classes.img} />
                  Каркас
                </MenuItem>
              </Link>
              <MenuItem onClick={handleClose} className={classes.menuItem}>
                <img src={base} alt="base" className={classes.img} />
                Фундамент
              </MenuItem>
              <MenuItem onClick={handleClose} className={classes.menuItem}>
                <img src={roof} alt="roof" className={classes.img} />
                Крыша
              </MenuItem>
            </Menu>
          </div>
        </div>
        <div className={classes.mainTable}>
          <TableCustomers rows={rows} />
        </div>
      </Container>
    </main>
  );
};

export default CustomerPage;

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  mainCanculation: {
    marginTop: theme.spacing(5),
  },
  mainTable: {
    marginTop: theme.spacing(5),
  },
  mainNav: {
    position: 'relative',
  },
  btnArrow: {
    position: 'absolute',
    top: 0,
    left: 0,
  },
  img: {
    maxHeight: 40,
    maxWidth: 40,
    marginRight: theme.spacing(2),
  },
  menuItem: {
    fontSize: 18,
  },
}));
