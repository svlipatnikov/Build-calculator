import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
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

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

function createData(name, date, status, address) {
    return { name, date, status, address };
}

const rows = [
    createData(1, '03-03-2021', 'Актуален', 'г. Ульяновск, и тд'),
    createData(2, '03-03-2021', 'Не актуален', 'г. Ульяновск, и тд'),
    createData(3, '03-03-2021', 'Заключен договор', 'г. Ульяновск, и тд'),
];

const DenseTable = () => {
    const classes = useStyles();

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} size="small" aria-label="a dense table">
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
                            <TableCell component="th" scope="row">
                                {row.name}
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

export default DenseTable;
