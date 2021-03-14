import { SET_CALCULATION_ID } from './types';

const setCalcId = (id, address, floor) => ({
  type: SET_CALCULATION_ID,
  payload: { id, address, floor },
});

export default setCalcId;
