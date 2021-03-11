/* eslint-disable arrow-body-style */
import React from 'react';
import { Box, Button } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

import BoxForm from '../BoxForm';

const fontSize = {
  fontSize: 16,
};

const DoorAndWindow = () => {
  return (
    <Box>
      <Box>
        <Box css={fontSize}>Оконные проемы</Box>
        <Box display="flex" alignItems="center" justifyContent="space-between" mt={2}>
          <Box>
            <Box css={fontSize} textAlign="center">
              Высота
            </Box>
            <BoxForm />
          </Box>
          <Box>
            <Box css={fontSize} textAlign="center">
              Ширина
            </Box>
            <BoxForm />
          </Box>
          <Box>
            <Box css={fontSize} textAlign="center">
              Количество
            </Box>
            <BoxForm />
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
            <BoxForm />
          </Box>
          <Box>
            <Box css={fontSize} textAlign="center">
              Ширина
            </Box>
            <BoxForm />
          </Box>
          <Box>
            <Box css={fontSize} textAlign="center">
              Количество
            </Box>
            <BoxForm />
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
            <BoxForm />
          </Box>
          <Box>
            <Box css={fontSize} textAlign="center">
              Ширина
            </Box>
            <BoxForm />
          </Box>
          <Box>
            <Box css={fontSize} textAlign="center">
              Количество
            </Box>
            <BoxForm />
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
