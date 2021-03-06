import React from 'react';
import { useHistory } from 'react-router';
import { Update, Edit, ArrowBack } from '@material-ui/icons';
import { Table, TableBody, TableCell, TableContainer, TableRow, Typography, Button, Tooltip, IconButton } from '@material-ui/core';
import CustomAccordion from '../../components/CustomAccordion/CustomAccordion';
import './Estimate.scss';

const rows = [
  { param: 'Доска на стойки внутренние', size: '40/250', dimensions: '1,8 куб м', sum: '30 тыс руб' },
  { param: 'Количество стоек на внутренние стены', size: '40/250', dimensions: '1,8 куб м', sum: '30 тыс руб' },
  { param: 'Количество досок на внешние стойки', size: '40/250', dimensions: '1,8 куб м', sum: '30 тыс руб' },
  { param: 'Количество досок на внутренние стойки', size: '40/250', dimensions: '1,8 куб м', sum: '30 тыс руб' },
  { param: <b>Общий объем пиломатериала для основных элементов каркаса</b>, size: '40/250', dimensions: '1,8 куб м', sum: '30 тыс руб' },
];

const Estimate = () => {
  const history = useHistory();

  return (
    <>
      <IconButton onClick={() => history.push('/')} className="arrow-back">
        <ArrowBack />
      </IconButton>

      <Typography variant="h4" align="center">Расчет</Typography>

      <div className="right">
        <Tooltip title="Сменить статус">
          <Button variant="outlined" color="primary" className="es-button">
            <Update />
          </Button>
        </Tooltip>
        <Tooltip title="Редактировать">
          <Button 
            color="primary" 
            variant="outlined" 
            className="es-button" 
            onClick={() => history.push('/')}
          >
            <Edit />
          </Button>
        </Tooltip>
      </div>

      <Typography variant="h6">Результат расчета стен</Typography>
      <EstimateTable />

      <CustomAccordion title="Результат расчета каркаса" className="mb-30">
        <EstimateTable />
      </CustomAccordion>

      <div className="right">
        <Button className="green">Добавить расчет</Button>
      </div>
    </>
  );
};

const EstimateTable = () => (
  <TableContainer className="mb-30">
    <Table>
      <TableBody>
        {rows.map((row, id) => (
          <TableRow key={id} className="es-row">
            <TableCell>{row.param}</TableCell>
            <TableCell align="right">{row.size}</TableCell>
            <TableCell align="right">{row.dimensions}</TableCell>
            <TableCell align="right">{row.sum}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
);

export default Estimate;