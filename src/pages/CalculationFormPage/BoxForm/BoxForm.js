import React from 'react';
import PropTypes from 'prop-types';
import { Box, TextField } from '@material-ui/core';

const BoxForm = ({ name }) => {
  return (
    <Box display="flex" alignItems="center" justifyContent="space-between" m={1}>
      <Box css={{ fontSize: 16 }}>{name}</Box>
      <Box>
        <TextField
          style={{
            width: '100px',
            backgroundColor: '#ffffff',
          }}
          variant="standard"
          color="secondary"
        />
      </Box>
    </Box>
  );
};

BoxForm.propTypes = {
  name: PropTypes.string,
};

BoxForm.defaultProps = {
  name: '',
};

export default BoxForm;
