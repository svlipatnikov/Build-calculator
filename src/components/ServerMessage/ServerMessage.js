import React, { useState } from 'react';
import { Dialog, DialogTitle, Typography } from '@material-ui/core';

const ServerMessage = () => {
  const [open, setOpen] = useState(true);

  const text = 'Message from server Message from server Message from server Message from server';

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog open={open} onClose={handleClose} hideBackdrop>
      <DialogTitle id="alert-dialog-title">
        <Typography align="center" variant="h6">
          {text}
        </Typography>
      </DialogTitle>
    </Dialog>
  );
};

export default ServerMessage;
