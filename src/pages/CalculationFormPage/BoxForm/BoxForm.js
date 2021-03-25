import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { Box, makeStyles } from '@material-ui/core';
import { useFormContext } from 'react-hook-form';
import { getObjPropertyByPath } from '../../../help/helpers';
import validation from '../validation';

const BoxForm = ({ name, title, measure }) => {
  const classes = useStyles();
  const propValidation = useMemo(() => validation(title), [title]);
  const { register, errors } = useFormContext();
  const error = getObjPropertyByPath(errors, title);

  return (
    <Box display="flex" alignItems="start" justifyContent="space-between" m={1}>
      <Box css={{ fontSize: 16 }}>{name}</Box>
      <Box width={150}>
        <Box className={classes.inputWrapper}>
          <input
            type="number"
            name={title}
            ref={register(propValidation)}
          />
          <span>{measure}</span>
        </Box>
        <Box className={classes.error}>{error && error.message}</Box>
      </Box>
    </Box>
  );
};

BoxForm.propTypes = {
  name: PropTypes.string,
  title: PropTypes.string.isRequired,
  measure: PropTypes.string,
};

BoxForm.defaultProps = {
  name: '',
  measure: '',
};

const useStyles = makeStyles(() => ({
  inputWrapper: {
    display: 'flex',
    flexWrap: 'nowrap',
    padding: '7px 10px',
    backgroundColor: '#ffffff',
    width: 150,
    '& input': {
      marginRight: 7,
      maxWidth: 'calc(100% - 22px)',
    },
  },
  error: {
    fontSize: 12,
    color: 'red',
    marginTop: 5,
  },
}));

export default BoxForm;
