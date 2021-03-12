import { SET_CUSTOMERS_LIST_CALC } from './types';

const setListCalc = (items) => ({
  type: SET_CUSTOMERS_LIST_CALC,
  payload: items,
});

export default setListCalc;
