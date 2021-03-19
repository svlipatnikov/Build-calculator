import React from 'react';
import { Dialog, DialogTitle, DialogActions, Typography, Button } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { errorSelector } from 'redux/selectors/appStateSelector';
import { clearError } from 'redux/actions/appStateAction';

const ServerMessage = () => {
  const { isError, statusCode, statusText } = useSelector(errorSelector);
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(clearError());
  };

  return (
    <Dialog open={isError} onClose={handleClose} fullWidth maxWidth="sm">
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
