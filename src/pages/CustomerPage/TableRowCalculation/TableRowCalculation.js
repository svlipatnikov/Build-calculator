/* eslint-disable camelcase */
import React, { useRef } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { TableRow, TableCell, Button } from '@material-ui/core';
import { Delete as DeleteIcon, Edit as EditIcon } from '@material-ui/icons';
import { useDispatch } from 'react-redux';
import { removeCurrentCustomerCalculation } from 'redux/actions/currentCustomerAction';
import PropTypes from 'prop-types';

const TableRowCalculation = ({ calculation }) => {
  const { id, created_date, state_calculation, adress_object_construction } = calculation;
  const history = useHistory();
  const dispatch = useDispatch();
  const { customerId } = useParams();
  const editRef = useRef(null);
  const removeRef = useRef(null);

  const handleClickCalculationResult = (event) => {
    if (!removeRef.current.contains(event.target) && !editRef.current.contains(event.target)) {
      history.push(`/customers/${customerId}/calculation_result/${id}`);
    }
  };

  const handleClickRemove = () => {
    dispatch(removeCurrentCustomerCalculation(id));
  };

  const handleClickEdit = () => {
    history.push(`/customers/${customerId}/calculation_edit/${id}`);
  };

  return (
    <TableRow onClick={handleClickCalculationResult} hover>
      <TableCell align="left">{id}</TableCell>
      <TableCell align="center">{created_date}</TableCell>
      <TableCell align="center">{state_calculation}</TableCell>
      <TableCell align="left">{adress_object_construction}</TableCell>
      <TableCell align="center">
        <Button onClick={handleClickEdit} ref={editRef}>
          <EditIcon />
        </Button>
      </TableCell>
      <TableCell align="center">
        <Button onClick={handleClickRemove} ref={removeRef}>
          <DeleteIcon />
        </Button>
      </TableCell>
    </TableRow>
  );
};

TableRowCalculation.propTypes = {
  calculation: PropTypes.shape({
    id: PropTypes.number.isRequired,
    created_date: PropTypes.string.isRequired,
    state_calculation: PropTypes.string.isRequired,
    adress_object_construction: PropTypes.string.isRequired,
  }).isRequired,
};

export default TableRowCalculation;
