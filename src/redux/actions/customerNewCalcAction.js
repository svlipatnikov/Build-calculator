import { SET_VALUE_NEW_CALC, CLEAR_VALUE_NEW_CALC } from './types';

export const setValueNewCalc = (name, value) => ({
  type: SET_VALUE_NEW_CALC,
  fieldName: name,
  payload: value,
});

export const clearValueNewCalc = () => ({
  type: CLEAR_VALUE_NEW_CALC,
});
