import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, TextField, Button, DialogActions } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const CustomerInfo = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSave = () => {
    setOpen(false);
    // TODO тут отправить данные о клиенте на сервер
  };

  return (
    <div>
      <Button variant="contained" color="primary" className={classes.btnNewCustomer} onClick={handleOpen}>
        Создать клиента
      </Button>

      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Информация о клиенте</DialogTitle>

        <DialogContent>
          <TextField fullWidth margin="dense" id="last_name" label="Фамилия" variant="outlined" color="secondary" />
          <TextField fullWidth margin="dense" id="first_name" label="Имя" variant="outlined" color="secondary" />
          <TextField fullWidth margin="dense" id="second_name" label="Отчество" variant="outlined" color="secondary" />
          <TextField fullWidth margin="dense" id="phone" label="Телефон" variant="outlined" color="secondary" />
          <TextField fullWidth margin="dense" id="email" label="E-mail" variant="outlined" color="secondary" />
          <TextField fullWidth margin="dense" id="adress" label="Адрес" variant="outlined" color="secondary" />
        </DialogContent>

        <DialogActions>
          <Button onClick={handleSave} variant="contained" color="primary" className={classes.btnSave}>
            Сохранить
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default CustomerInfo;

const useStyles = makeStyles((theme) => ({
  btnNewCustomer: {
    marginBottom: theme.spacing(4),
  },
  btnSave: {
    margin: theme.spacing(2),
  },
}));
