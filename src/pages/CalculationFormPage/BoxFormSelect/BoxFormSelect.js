/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { Box, TextField } from '@material-ui/core';

const BoxFormSelect = ({ name, value, handleChangeValues, title, currencies }) => {
  return (
    <Box display="flex" alignItems="center" justifyContent="space-between" m={1}>
      <Box css={{ fontSize: 16 }}>{name}</Box>
      <TextField
        id="standard-select-currency-native"
        select
        style={{
          width: '100px',
          backgroundColor: '#ffffff',
        }}
        value={value}
        onChange={handleChangeValues(title)}
        SelectProps={{
          native: true,
        }}>
        {currencies.map((option) => (
          <option key={option.value} value={option.value}>
            {option.value}
          </option>
        ))}
      </TextField>
    </Box>
  );
};

BoxFormSelect.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
  handleChangeValues: PropTypes.func,
  title: PropTypes.string,
};

BoxFormSelect.defaultProps = {
  name: '',
  value: '',
  handleChangeValues: () => {},
  title: '',
};

export default BoxFormSelect;
