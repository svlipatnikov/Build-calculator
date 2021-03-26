import React, { useRef } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { TableRow, TableCell, Button } from '@material-ui/core';
import { Delete as DeleteIcon, Edit as EditIcon } from '@material-ui/icons';
import { useDispatch } from 'react-redux';
import { removeCurrentCustomerCalculation } from 'redux/actions/currentCustomerAction';
import PropTypes from 'prop-types';

const TableRowCalculation = ({ calculation }) => {
  const { id, createdDate, stateCalculation, adressObjectConstruction } = calculation;
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
      <TableCell align="center">{createdDate}</TableCell>
      <TableCell align="center">{stateCalculation}</TableCell>
      <TableCell align="left">{adressObjectConstruction}</TableCell>
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
    createdDate: PropTypes.string.isRequired,
    stateCalculation: PropTypes.string.isRequired,
    adressObjectConstruction: PropTypes.string.isRequired,
  }).isRequired,
};

export default TableRowCalculation;
