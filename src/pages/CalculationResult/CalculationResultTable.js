import React from 'react';
// import { useSelector } from 'react-redux';
import {
  makeStyles,
  Table,
  TableBody,
  // TableCell,
  TableContainer,
  // TableRow,
} from '@material-ui/core';

const CalculationResultTable = () => {
  const classes = useStyles();

  return (
    <TableContainer className={classes.mb30}>
      <Table>
        <TableBody>
          {/* {estimateList.map((row) => (
            <TableRow key={row.param}>
              <TableCell className={classes.td}>{row.param}</TableCell>
              <TableCell align="right" className={classes.td}>{row.size}</TableCell>
              <TableCell align="right" className={classes.td}>{row.dimensions}</TableCell>
              <TableCell align="right" className={classes.td}>{row.sum}</TableCell>
            </TableRow>
          ))} */}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

const useStyles = makeStyles((theme) => ({
  mb30: {
    marginBottom: 30,
  },
  td: {
    '&:not(:first-child)': {
      whiteSpace: 'nowrap',
    },
    [theme.breakpoints.down(600)]: {
      padding: '16px 7px',
    },
    [theme.breakpoints.down(375)]: {
      fontSize: 11,
      padding: '12px 3px',
    },
  },
}));

export default CalculationResultTable;