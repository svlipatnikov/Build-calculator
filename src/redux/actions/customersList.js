/* eslint-disable import/prefer-default-export */
import { SET_CUSTOMERS_LIST_DATA } from './types';

export const setCustomersListAction = (customersArr) => ({
  type: SET_CUSTOMERS_LIST_DATA,
  payload: customersArr,
});
