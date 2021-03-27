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
          <Box css={fontSize} textAlign="center">
            Высота
          </Box>
          <BoxForm title="window.height" measure="м" />
        </Box>
        <Box>
          <Box css={fontSize} textAlign="center">
            Ширина
          </Box>
          <BoxForm title="window.wigth" measure="м" />
        </Box>
        <Box>
          <Box css={fontSize} textAlign="center">
            Количество
          </Box>
          <BoxForm title="window.count" measure="шт" />
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
      <Box display="flex" alignItems="start" justifyContent="space-between" mt={2}>
        <Box>
          <Box css={fontSize} textAlign="center">
            Высота
          </Box>
          <BoxForm title="doorOut.height" measure="м" />
        </Box>
        <Box>
          <Box css={fontSize} textAlign="center">
            Ширина
          </Box>
          <BoxForm title="doorOut.wigth" measure="м" />
        </Box>
        <Box>
          <Box css={fontSize} textAlign="center">
            Количество
          </Box>
          <BoxForm title="doorOut.count" measure="шт" />
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
      <Box display="flex" alignItems="start" justifyContent="space-between" mt={2}>
        <Box>
          <Box css={fontSize} textAlign="center">
            Высота
          </Box>
          <BoxForm title="doorIn.height" measure="м" />
        </Box>
        <Box>
          <Box css={fontSize} textAlign="center">
            Ширина
          </Box>
          <BoxForm title="doorIn.wigth" measure="м" />
        </Box>
        <Box>
          <Box css={fontSize} textAlign="center">
            Количество
          </Box>
          <BoxForm title="doorIn.count" measure="шт" />
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
