import sendRequest from 'api';
import { SET_CURRENT_CALCULATION } from './types';

export const setCurrentCalculation = (calculation) => ({
  type: SET_CURRENT_CALCULATION,
  payload: calculation,
});

export const getCurrentCalculation = (id) => (dispatch) => {
  sendRequest(`/calculation/${id}/`, 'GET')
    .then((res) => dispatch(setCurrentCalculation(res)));
};