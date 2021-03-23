import sendRequest from 'api';
import { SET_MATERIALS } from './types';

export const getMaterials = () => (dispatch) => {
  sendRequest('/materials/', 'GET').then((res) => dispatch(setMaterials(res)));
};

export const setMaterials = (materials) => ({
  type: SET_MATERIALS,
  payload: materials,
});
