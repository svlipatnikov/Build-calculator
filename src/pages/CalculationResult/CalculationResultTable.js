import React, { useMemo } from 'react';
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

  const total = useMemo(() => {
    const localTotal = {};

    Object.keys(data).forEach((category) => {
      localTotal[category] = data[category].reduce((sum, categoryData) => sum + categoryData.full_price, 0);
    });

    return localTotal;
  }, [data]);

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
          {Object.entries(data).map(([category, categoryData]) => (
            <>
              <TableRow>
                <TableCell className={classes.td}>{category}</TableCell>
                <TableCell className={classes.td} colSpan="3" />
                <TableCell align="center" className={classes.td}>
                  {total[category]} руб.
                </TableCell>
              </TableRow>
              {categoryData.map((row) => (
                <TableRow className={classes.row}>
                  <TableCell className={classes.td}>{row.specific_material.material}</TableCell>
                  <TableCell align="center" className={classes.td}>{row.specific_material.name}</TableCell>
                  <TableCell align="center" className={classes.td}>{row.specific_material.measurement_unit}</TableCell>
                  <TableCell align="center" className={classes.td}>{row.amount}</TableCell>
                  <TableCell align="center" className={classes.td}>{row.full_price} руб.</TableCell>
                </TableRow>
              ))}
            </>
          ))}
          <TableRow>
            <TableCell className={classes.td}><b>Итого стоимость материалов</b></TableCell>
            <TableCell className={classes.td} colSpan="3" />
            <TableCell align="center" className={classes.td}>
              {Object.values(total).reduce((fullTotal, categoryTotal) => fullTotal + categoryTotal, 0)} руб.
            </TableCell>
          </TableRow>
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
  data: PropTypes.shape({
    [PropTypes.string]: PropTypes.arrayOf(PropTypes.shape({
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
  }),
};

CalculationResultTable.defaultProps = {
  data: {},
};

export default CalculationResultTable;