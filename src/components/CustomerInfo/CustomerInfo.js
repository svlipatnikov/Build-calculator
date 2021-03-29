import React, { useEffect, useState } from 'react';
import { Dialog, DialogTitle, DialogContent, TextField, Button, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import sendRequest from 'api';
import { useDispatch } from 'react-redux';
import { clearCurrentCustomerAction, createNewCustomer, updateCustomer } from 'redux/actions/currentCustomerAction';
import { useHistory } from 'react-router-dom';
import { customersListIsChangedAction } from 'redux/actions/customersListAction';
import { useForm } from 'react-hook-form';
import validation from './validation';

const labels = {
  lastName: { label: 'Фамилия', type: 'text' },
  firstName: { label: 'Имя', type: 'text' },
  secondName: { label: 'Отчество', type: 'text' },
  phone: { label: 'Телефон', type: 'tel' },
  email: { label: 'E-mail', type: 'email' },
  adress: { label: 'Адрес', type: 'text' },
};

const CustomerInfo = ({ open, setOpen, customerData }) => {
  const classes = useStyles();
  const { id, ...defaultValues } = customerData;
  const { register, handleSubmit, errors } = useForm({ defaultValues });
  const isNew = !id;
  const [editable, setEditable] = useState(isNew);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    setEditable(isNew);
  }, [isNew, open]);

  const handleClose = () => {
    setOpen(false);
  };

  const handleSave = (data) => {
    if (data) {
      if (isNew) dispatch(createNewCustomer(data));
      else dispatch(updateCustomer({ id, ...data }));
      handleClose();
    }
  };

  const handleRemove = () => {
    sendRequest(`/customers/${id}/`, 'DELETE', { id }).then(() => {
      handleClose();
      history.push('/customers');
      dispatch(clearCurrentCustomerAction());
      dispatch(customersListIsChangedAction());
    });
  };

  const handleEdit = () => {
    setEditable(true);
  };

  return (
    <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
      <form onSubmit={handleSubmit(handleSave)} noValidate>
        <DialogTitle id="form-dialog-title">Информация о клиенте</DialogTitle>

        <DialogContent>
          {Object.keys(labels).map((field) => (
            <TextField
              id={field}
              key={field}
              variant="outlined"
              color="secondary"
              margin="dense"
              fullWidth
              disabled={!editable}
              name={field}
              inputRef={register(validation(field))}
              helperText={errors[field] && errors[field].message}
              error={!!errors[field]}
              {...labels[field]}
            />

          ))}
        </DialogContent>

        <Box display="flex" flexDirection="row-reverse" justifyContent="space-between" m={1}>
          {editable ? (
            <Button type="submit" variant="contained" color="primary" className={classes.btn}>
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
      </form>
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
  customerData: PropTypes.shape({
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
  customerData: {
    id: null,
    lastName: '',
    firstName: '',
    secondName: '',
    phone: '',
    email: '',
    adress: '',
  },
};
