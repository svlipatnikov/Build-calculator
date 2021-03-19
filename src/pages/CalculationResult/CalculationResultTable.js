import React from 'react';
import PropTypes from 'prop-types';
import {
  makeStyles,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@material-ui/core';

const CalculationResultTable = ({ data }) => {
  const classes = useStyles();

  return (
    <TableContainer className={classes.mb30}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell className={classes.th} />
            <TableCell align="center" className={classes.th}>Материал</TableCell>
            <TableCell align="center" className={classes.th}>Ед. измерения</TableCell>
            <TableCell align="center" className={classes.th}>Количество</TableCell>
            <TableCell align="center" className={classes.th}>Стоимость материалов</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <>
              <TableRow>
                <TableCell className={classes.td}>{row.name}</TableCell>
                <TableCell className={classes.td} colSpan="3" />
                <TableCell align="center" className={classes.td}>{row.full_price} руб.</TableCell>
              </TableRow>
              <TableRow className={classes.row}>
                <TableCell className={classes.td}>{row.specific_material.material}</TableCell>
                <TableCell align="center" className={classes.td}>{row.specific_material.name}</TableCell>
                <TableCell align="center" className={classes.td}>{row.specific_material.measurement_unit}</TableCell>
                <TableCell align="center" className={classes.td}>{row.amount}</TableCell>
                <TableCell align="center" className={classes.td}>{row.price} руб.</TableCell>
              </TableRow>
            </>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

const useStyles = makeStyles(() => ({
  mb30: {
    marginBottom: 30,
  },
  table: {
    background: 'white',
    border: '1px solid #b9b9b9',
  },
  row: {
    background: '#dfe5f2',
  },
  th: {
    color: 'white',
    background: '#334483',
    border: '1px solid #b9b9b9',
  },
  td: {
    border: '1px solid #b9b9b9',
    '&:not(:first-child)': {
      whiteSpace: 'nowrap',
    },
  },
}));

CalculationResultTable.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    amount: PropTypes.string,
    full_price: PropTypes.number,
    name: PropTypes.string,
    price: PropTypes.number,
    specific_material: PropTypes.shape({
      id: PropTypes.number,
      material: PropTypes.string,
      measurement_unit: PropTypes.string,
      name: PropTypes.string,
    }),
  })),
};

CalculationResultTable.defaultProps = {
  data: [],
};

export default CalculationResultTable;