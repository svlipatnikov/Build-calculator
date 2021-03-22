import { SET_CALCULATION_ID } from './types';

const setCalcId = (id) => ({
  type: SET_CALCULATION_ID,
  payload: id,
});

export default setCalcId;
