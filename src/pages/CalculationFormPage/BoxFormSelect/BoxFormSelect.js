import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { Box, makeStyles } from '@material-ui/core';
import { useFormContext } from 'react-hook-form';
import { getObjPropertyByPath } from '../../../help/helpers';
import * as currencies from '../const';
import validation from '../validation';

const BoxFormSelect = ({ name, title, currency }) => {
  const classes = useStyles();
  const { register, errors } = useFormContext();
  const error = getObjPropertyByPath(errors, title);

  const propValidation = useMemo(() => validation(title), [title]);

  return (
    <Box display="flex" alignItems="center" justifyContent="space-between" m={1}>
      <Box css={{ fontSize: 16 }}>{name}</Box>
      <Box width={150}>
        <Box className={classes.selectWrapper}>
          <select name={title} ref={register(propValidation)} defaultValue="">
            <option value="" hidden>&nbsp;</option>
            {currencies[currency].map((option) => (
              <option key={option.value} value={option.value}>
                {option.value}
              </option>
            ))}
          </select>
        </Box>
        <Box className={classes.error}>{error && error.message}</Box>
      </Box>
    </Box>
  );
};

BoxFormSelect.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};

const useStyles = makeStyles(() => ({
  selectWrapper: {
    background: '#fff',
    borderBottom: '2px solid #4d546e',
    '& select': {
      padding: '6px 0 7px',
      cursor: 'pointer',
      width: '100%',
    },
  },
  error: {
    fontSize: 12,
    color: 'red',
    marginTop: 5,
  },
}));

export default BoxFormSelect;
