import sendRequest from 'api';
import { SET_CUSTOMERS_LIST_CALC, SET_MATERIALS } from './types';

export const setListCalc = (items) => ({
  type: SET_CUSTOMERS_LIST_CALC,
  payload: items,
});

export const setMaterials = (materials) => ({
  type: SET_MATERIALS,
  payload: materials,
});

export const getMaterials = () => (dispatch) => {
  sendRequest('/materials/', 'GET')
    .then((res) => dispatch(setMaterials(res)));
};