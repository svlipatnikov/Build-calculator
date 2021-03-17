import sendRequest from 'api';
import { SET_CUSTOMERS_LIST_CALC, SET_MATERIALS } from './types';
import setChangeFlagAction from './changeFlagAction';

export const getCalculation = () => (dispatch) => {
  sendRequest('/calculation/', 'GET').then((res) => dispatch(setListCalc(res)));
  dispatch(setChangeFlagAction(false));
};

export const setListCalc = (items) => ({
  type: SET_CUSTOMERS_LIST_CALC,
  payload: items,
});

export const getMaterials = () => (dispatch) => {
  sendRequest('/materials/', 'GET').then((res) => dispatch(setMaterials(res)));
};

export const setMaterials = (materials) => ({
  type: SET_MATERIALS,
  payload: materials,
});
