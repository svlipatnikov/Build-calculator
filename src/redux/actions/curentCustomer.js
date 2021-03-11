/* eslint-disable import/prefer-default-export */
import { SET_CURENT_CUSTOMER_INFO } from './types';

export const setCurentCustomerAction = (curentCustomerObj) => ({
  type: SET_CURENT_CUSTOMER_INFO,
  payload: curentCustomerObj,
});
