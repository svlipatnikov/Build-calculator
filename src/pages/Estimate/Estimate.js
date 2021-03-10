import React from 'react';
import { useHistory } from 'react-router';
import { makeStyles } from '@material-ui/core/styles';
import { Update, Edit, ArrowBack } from '@material-ui/icons';
import { Typography, Button, Tooltip } from '@material-ui/core';
import CustomAccordion from '../../components/CustomAccordion';
import EstimateTable from './EstimateTable';

const Estimate = () => {
  const history = useHistory();
  const classes = useStyles();

  const goBack = () => history.push('/calculation/new')

  return (
    <>
      <Button>
        <ArrowBack fontSize="large" onClick={goBack} />
      </Button>

      <Typography variant="h4" align="center">Расчет</Typography>

      <div className={classes.right}>
        <Tooltip title="Сменить статус">
          <Button variant="outlined" color="primary" className={classes.button}>
            <Update />
          </Button>
        </Tooltip>
        <Tooltip title="Редактировать">
          <Button
            color="primary"
            variant="outlined"
            className={classes.button}
            onClick={goBack}
          >
            <Edit />
          </Button>
        </Tooltip>
      </div>

      <Typography variant="h6">Результат расчета стен</Typography>
      <EstimateTable />

      <CustomAccordion title="Результат расчета каркаса" className={classes.mb30}>
        <EstimateTable />
      </CustomAccordion>

      <div className={classes.right}>
        <Button className={classes.green}>Добавить расчет</Button>
      </div>
    </>
  );
};

const useStyles = makeStyles(theme => ({
  mb30: {
    marginBottom: 30,
  },
  right: {
    textAlign: 'right',
  },
  green: {
    color: 'white',
    border: '1px solid transparent',
    backgroundColor: '#146c43',
    transition: '0.5s',
    '&:hover': {
      backgroundColor: '#0e5333',
    }
  },
  button: {
    minWidth: 'unset',
    padding: 6,
    marginRight: 5,
  },
}));

export default Estimate;