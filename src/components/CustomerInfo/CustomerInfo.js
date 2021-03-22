/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { Dialog, DialogTitle, DialogContent, TextField, Button, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import sendRequest from 'api';
import { camelToSnakeObj } from 'help';
import { useDispatch } from 'react-redux';
import { clearCurentCustomerAction, setCurentCustomerAction } from 'redux/actions/curentCustomerAction';
import { useHistory } from 'react-router-dom';
import { customersListIsChangedAction } from 'redux/actions/customersListAction';

const labels = {
  lastName: 'Фамилия',
  firstName: 'Имя',
  secondName: 'Отчество',
  phone: 'Телефон',
  email: 'E-mail',
  adress: 'Адрес',
};

const CustomerInfo = ({ open, setOpen, clientData }) => {
  const classes = useStyles();
  const { id, ...initialData } = clientData;
  const [clientInfo, setClientInfo] = useState(initialData);
  const isNew = !id;
  const [editable, setEditable] = useState(isNew);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    setEditable(isNew);
  }, [open]);

  const handleClose = () => {
    setOpen(false);
    setClientInfo({});
  };

  const handleSave = () => {
    if (isNew) {
      sendRequest('/customers/', 'POST', camelToSnakeObj(clientInfo)).then(() => {
        dispatch(customersListIsChangedAction());
        handleClose();
      });
    } else {
      sendRequest(`/customers/${id}/`, 'PATCH', camelToSnakeObj({ id, ...clientInfo })).then(() => {
        dispatch(setCurentCustomerAction({ id, ...clientInfo }));
        dispatch(customersListIsChangedAction());
        handleClose();
      });
    }
  };

  const handleRemove = () => {
    sendRequest(`/customers/${id}/`, 'DELETE', { id }).then(() => {
      dispatch(clearCurentCustomerAction());
      dispatch(customersListIsChangedAction());
      handleClose();
      history.push('/customers');
    });
  };

  const handleChange = (prop) => (event) => {
    setClientInfo({ ...clientInfo, [prop]: event.target.value });
  };

  const handleEdit = () => {
    setEditable(true);
  };

  return (
    <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
      <DialogTitle id="form-dialog-title">Информация о клиенте</DialogTitle>

      <DialogContent>
        {Object.keys(labels).map((field) => (
          <TextField
            id={field}
            key={field}
            label={labels[field]}
            value={clientInfo[field]}
            onChange={handleChange(field)}
            variant="outlined"
            color="secondary"
            margin="dense"
            fullWidth
            disabled={!editable}
          />
        ))}
      </DialogContent>

      <Box display="flex" flexDirection="row-reverse" justifyContent="space-between" m={1}>
        {editable ? (
          <Button onClick={handleSave} variant="contained" color="primary" className={classes.btn}>
            Сохранить
          </Button>
        ) : (
          <Button onClick={handleEdit} variant="contained" color="primary" className={classes.btn}>
            Редактировать
          </Button>
        )}

        {!isNew && editable && (
          <Button onClick={handleRemove} variant="contained" color="primary" className={classes.btn}>
            Удалить
          </Button>
        )}
      </Box>
    </Dialog>
  );
};

export default CustomerInfo;

const useStyles = makeStyles((theme) => ({
  btn: {
    margin: theme.spacing(2),
  },
}));

CustomerInfo.propTypes = {
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
  clientData: PropTypes.shape({
    id: PropTypes.number,
    lastName: PropTypes.string,
    firstName: PropTypes.string,
    secondName: PropTypes.string,
    phone: PropTypes.string,
    email: PropTypes.string,
    adress: PropTypes.string,
  }),
};

CustomerInfo.defaultProps = {
  clientData: {
    id: null,
    lastName: '',
    firstName: '',
    secondName: '',
    phone: '',
    email: '',
    adress: '',
  },
};
