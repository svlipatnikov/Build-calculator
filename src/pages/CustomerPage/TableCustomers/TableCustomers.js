import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import setCalcId from 'redux/actions/setCalcId';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Button } from '@material-ui/core';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import DeleteIcon from '@material-ui/icons/Delete';

const DenseTable = ({ rows }) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const handleClick = (id, address, floor) => {
    history.push(`/calculationedit/${id}`);
    dispatch(setCalcId(id, address, floor));
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
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell
                component="th"
                scope="row"
                onClick={() => handleClick(row.id, row.address, row.floor)}>
                <Button>{row.name}</Button>
              </TableCell>
              <TableCell align="right">{row.date}</TableCell>
              <TableCell align="right">{row.status}</TableCell>
              <TableCell align="right">{row.address}</TableCell>
              <TableCell align="right">
                <Button>
                  <FileCopyIcon />
                </Button>
              </TableCell>
              <TableCell align="right">
                <Button>
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

DenseTable.propTypes = {
  rows: PropTypes.shape,
};

DenseTable.defaultProps = {
  rows: [],
};

export default DenseTable;
