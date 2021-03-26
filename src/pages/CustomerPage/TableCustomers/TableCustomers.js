import React from 'react';
import { useSelector } from 'react-redux';
import { calculationSelector } from 'redux/selectors/currentCustomerSelector';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@material-ui/core';
import TableRowCalculation from '../TableRowCalculation';

const DenseTable = () => {
  const calculations = useSelector(calculationSelector);

  return (
    <TableContainer component={Paper}>
      <Table size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell align="left">Номер расчета</TableCell>
            <TableCell align="center">Дата</TableCell>
            <TableCell align="center">Статус</TableCell>
            <TableCell align="center">Адрес</TableCell>
            <TableCell />
            <TableCell />
          </TableRow>
        </TableHead>
        <TableBody>
          {calculations &&
            calculations.map((calculation) => <TableRowCalculation key={calculation.id} calculation={calculation} />)}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default DenseTable;
