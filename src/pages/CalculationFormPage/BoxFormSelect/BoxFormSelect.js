import React from 'react';
import PropTypes from 'prop-types';
import { Box, TextField } from '@material-ui/core';

import { currencies } from './const';

const BoxFormSelect = ({ name }) => {
  const [currency, setCurrency] = React.useState('мм');

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };

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
          value={currency}
          onChange={handleChange}
          SelectProps={{
            native: true,
          }}
          select>
          {currencies.map((option) => (
            <option key={option.value} value={option.value}>
              {option.value}
            </option>
          ))}
        </TextField>
      </Box>
    </Box>
  );
};

BoxFormSelect.propTypes = {
  name: PropTypes.string,
};

BoxFormSelect.defaultProps = {
  name: '',
};

export default BoxFormSelect;
