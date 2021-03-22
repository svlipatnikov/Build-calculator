import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Button } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import customerNewValueCalc from '../../../redux/selectors/customerNewCalcSelector';
import { setValueNewCalc } from '../../../redux/actions/customerNewCalcAction';

import BoxForm from '../BoxForm';

const fontSize = {
  fontSize: 16,
};

const DoorAndWindow = () => {
  const dispatch = useDispatch();
  const {
    wigthWindow,
    heightWindow,
    countWindow,
    wigthDoorOut,
    heightDoorOut,
    countDoorOut,
    wigthDoorIn,
    heightDoorIn,
    countDoorIn,
  } = useSelector(customerNewValueCalc);

  const handleChangeValue = (prop) => (e) => {
    dispatch(setValueNewCalc(prop, e.target.value));
  };

  return (
    <Box>
      <Box>
        <Box css={fontSize}>Оконные проемы</Box>
        <Box display="flex" alignItems="center" justifyContent="space-between" mt={2}>
          <Box>
            <Box css={fontSize} textAlign="center">
              Высота
            </Box>
            <BoxForm
              value={heightWindow}
              title="heightWindow"
              handleChangeValues={handleChangeValue}
              measure="м"
            />
          </Box>
          <Box>
            <Box css={fontSize} textAlign="center">
              Ширина
            </Box>
            <BoxForm
              value={wigthWindow}
              title="wigthWindow"
              handleChangeValues={handleChangeValue}
              measure="м"
            />
          </Box>
          <Box>
            <Box css={fontSize} textAlign="center">
              Количество
            </Box>
            <BoxForm
              value={countWindow}
              title="countWindow"
              handleChangeValues={handleChangeValue}
              measure="шт"
            />
          </Box>
        </Box>
        <Box display="flex" justifyContent="flex-end">
          <Button>
            <AddIcon fontSize="small" />
          </Button>
        </Box>
      </Box>
      <Box>
        <Box css={fontSize} mt={2}>
          Дверные проемы внешние
        </Box>
        <Box display="flex" alignItems="center" justifyContent="space-between" mt={2}>
          <Box>
            <Box css={fontSize} textAlign="center">
              Высота
            </Box>
            <BoxForm
              value={heightDoorOut}
              title="heightDoorOut"
              handleChangeValues={handleChangeValue}
              measure="м"
            />
          </Box>
          <Box>
            <Box css={fontSize} textAlign="center">
              Ширина
            </Box>
            <BoxForm
              value={wigthDoorOut}
              title="wigthDoorOut"
              handleChangeValues={handleChangeValue}
              measure="м"
            />
          </Box>
          <Box>
            <Box css={fontSize} textAlign="center">
              Количество
            </Box>
            <BoxForm
              value={countDoorOut}
              title="countDoorOut"
              handleChangeValues={handleChangeValue}
              measure="шт"
            />
          </Box>
        </Box>
        <Box display="flex" justifyContent="flex-end">
          <Button>
            <AddIcon fontSize="small" />
          </Button>
        </Box>
      </Box>
      <Box>
        <Box css={fontSize} mt={2}>
          Дверные проемы внутренние
        </Box>
        <Box display="flex" alignItems="center" justifyContent="space-between" mt={2}>
          <Box>
            <Box css={fontSize} textAlign="center">
              Высота
            </Box>
            <BoxForm
              value={heightDoorIn}
              title="heightDoorIn"
              handleChangeValues={handleChangeValue}
              measure="м"
            />
          </Box>
          <Box>
            <Box css={fontSize} textAlign="center">
              Ширина
            </Box>
            <BoxForm
              value={wigthDoorIn}
              title="wigthDoorIn"
              handleChangeValues={handleChangeValue}
              measure="м"
            />
          </Box>
          <Box>
            <Box css={fontSize} textAlign="center">
              Количество
            </Box>
            <BoxForm
              value={countDoorIn}
              title="countDoorIn"
              handleChangeValues={handleChangeValue}
              measure="шт"
            />
          </Box>
        </Box>
        <Box display="flex" justifyContent="flex-end">
          <Button>
            <AddIcon fontSize="small" />
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default DoorAndWindow;
