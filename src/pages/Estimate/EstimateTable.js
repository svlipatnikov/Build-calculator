import React from 'react';
import { makeStyles, Table, TableBody, TableCell, TableContainer, TableRow } from '@material-ui/core';

const rows = [
  { param: 'Доска на стойки внутренние', size: '40/250', dimensions: '1,8 куб м', sum: '30 тыс руб' },
  { param: 'Количество стоек на внутренние стены', size: '40/250', dimensions: '1,8 куб м', sum: '30 тыс руб' },
  { param: 'Количество досок на внешние стойки', size: '40/250', dimensions: '1,8 куб м', sum: '30 тыс руб' },
  { param: 'Количество досок на внутренние стойки', size: '40/250', dimensions: '1,8 куб м', sum: '30 тыс руб' },
  { param: <b>Общий объем пиломатериала для основных элементов каркаса</b>, size: '40/250', dimensions: '1,8 куб м', sum: '30 тыс руб' },
];

const EstimateTable = () => {
  const classes = useStyles();

  return (
    <TableContainer className={classes.mb30}>
      <Table>
        <TableBody>
          {rows.map((row, id) => (
            <TableRow key={id}>
              <TableCell className={classes.td}>{row.param}</TableCell>
              <TableCell align="right" className={classes.td}>{row.size}</TableCell>
              <TableCell align="right" className={classes.td}>{row.dimensions}</TableCell>
              <TableCell align="right" className={classes.td}>{row.sum}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

const useStyles = makeStyles(theme => ({
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
    }
  },
}));

export default EstimateTable;