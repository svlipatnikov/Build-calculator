/* eslint-disable react/prop-types */
import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Button } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { removeCurrentCustomerCalculation } from 'redux/actions/currentCustomerAction';

const DenseTable = ({ rows }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { customerId } = useParams();

  const handleClickCalculationResult = (calculation) => {
    history.push(`/customers/${customerId}/calculation_result/${calculation.id}`);
  };

  const handleClickRemove = ({ id }) => {
    dispatch(removeCurrentCustomerCalculation(id));
  };

  return (
    <TableContainer component={Paper}>
      <Table size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Номер расчета</TableCell>
            <TableCell align="right">Дата</TableCell>
            <TableCell align="right">Статус</TableCell>
            <TableCell align="right">Адрес</TableCell>
            <TableCell />
            <TableCell />
          </TableRow>
        </TableHead>
        <TableBody>
          {rows &&
            rows.map((row) => (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row">
                  <Button onClick={() => handleClickCalculationResult(row)}>{row.id}</Button>
                </TableCell>
                <TableCell align="right">{row.created_date}</TableCell>
                <TableCell align="right">{row.state_calculation}</TableCell>
                <TableCell align="right">{row.adress_object_construction}</TableCell>
                <TableCell align="right">
                  <Button>
                    <EditIcon />
                  </Button>
                </TableCell>
                <TableCell align="right">
                  <Button onClick={() => handleClickRemove(row)}>
                    <DeleteIcon />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default DenseTable;
