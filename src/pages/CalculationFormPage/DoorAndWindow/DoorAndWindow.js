import React from 'react';
import { Box, Button } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

import BoxForm from '../BoxForm';

const fontSize = {
  fontSize: 16,
};

const DoorAndWindow = () => (
  <Box>
    <Box>
      <Box css={fontSize}>Оконные проемы</Box>
      <Box display="flex" alignItems="start" justifyContent="space-between" mt={2}>
        <Box>
          <Box css={fontSize} textAlign="center">Высота</Box>
          <BoxForm title="window.heightWindow" measure="м" />
        </Box>
        <Box>
          <Box css={fontSize} textAlign="center">Ширина</Box>
          <BoxForm title="window.wigthWindow" measure="м" />
        </Box>
        <Box>
          <Box css={fontSize} textAlign="center">Количество</Box>
          <BoxForm title="window.countWindow" measure="шт" />
        </Box>
      </Box>
      <Box display="flex" justifyContent="flex-end">
        <Button>
          <AddIcon fontSize="small" />
        </Button>
      </Box>
    </Box>
    <Box>
      <Box css={fontSize} mt={2}>Дверные проемы внешние</Box>
      <Box display="flex" alignItems="start" justifyContent="space-between" mt={2}>
        <Box>
          <Box css={fontSize} textAlign="center">Высота</Box>
          <BoxForm title="doorOut.heightDoorOut" measure="м" />
        </Box>
        <Box>
          <Box css={fontSize} textAlign="center">Ширина</Box>
          <BoxForm title="doorOut.wigthDoorOut" measure="м" />
        </Box>
        <Box>
          <Box css={fontSize} textAlign="center">Количество</Box>
          <BoxForm title="doorOut.countDoorOut" measure="шт" />
        </Box>
      </Box>
      <Box display="flex" justifyContent="flex-end">
        <Button>
          <AddIcon fontSize="small" />
        </Button>
      </Box>
    </Box>
    <Box>
      <Box css={fontSize} mt={2}>Дверные проемы внутренние</Box>
      <Box display="flex" alignItems="start" justifyContent="space-between" mt={2}>
        <Box>
          <Box css={fontSize} textAlign="center">Высота</Box>
          <BoxForm title="doorIn.heightDoorIn" measure="м" />
        </Box>
        <Box>
          <Box css={fontSize} textAlign="center">Ширина</Box>
          <BoxForm title="doorIn.wigthDoorIn" measure="м" />
        </Box>
        <Box>
          <Box css={fontSize} textAlign="center">Количество</Box>
          <BoxForm title="doorIn.countDoorIn" measure="шт" />
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

export default DoorAndWindow;
