import React, { useEffect, useState } from 'react';
import { Dialog, DialogTitle, DialogActions, Typography, Button } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import serverErrorSelector from 'redux/selectors/serverErrorSelector';
import clearServerError from 'redux/actions/clearServerErrorAction';

const ServerMessage = () => {
  const [open, setOpen] = useState(true);
  const { statusCode, statusText } = useSelector(serverErrorSelector);
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(clearServerError());
    setOpen(false);
  };

  useEffect(() => {
    if (statusCode || statusText) setOpen(true);
  }, [statusCode, statusText]);

  if (!statusCode && !statusText) return null;

  return (
    <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
      <DialogTitle id="alert-dialog-title">
        <Typography align="center" variant="h6">
          {`Error ${statusCode || ''}: ${statusText}`}
        </Typography>
      </DialogTitle>

      <DialogActions>
        <Button autoFocus onClick={handleClose} color="primary">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ServerMessage;
