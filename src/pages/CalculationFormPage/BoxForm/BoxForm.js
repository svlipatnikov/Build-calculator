import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@material-ui/core';
import InputAdornment from '@material-ui/core/InputAdornment';
import Input from '@material-ui/core/Input';

const BoxForm = ({ name, value, handleChangeValues, title, measure }) => {
  return (
    <Box display="flex" alignItems="center" justifyContent="space-between" m={1}>
      <Box css={{ fontSize: 16 }}>{name}</Box>
      <Box>
        <Input
          style={{
            width: '100px',
            backgroundColor: '#ffffff',
          }}
          variant="standard"
          color="secondary"
          endAdornment={<InputAdornment position="end">{measure}</InputAdornment>}
          value={value}
          onChange={handleChangeValues(title)}
        />
      </Box>
    </Box>
  );
};

BoxForm.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
  handleChangeValues: PropTypes.func,
  title: PropTypes.string,
  measure: PropTypes.string,
};

BoxForm.defaultProps = {
  name: '',
  value: '',
  handleChangeValues: () => {},
  title: '',
  measure: '',
};

export default BoxForm;
