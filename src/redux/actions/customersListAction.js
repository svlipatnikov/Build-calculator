import { SET_CUSTOMERS_LIST_DATA } from './types';

export const setCustomersListAction = (customersArr) => {
  return {
    type: SET_CUSTOMERS_LIST_DATA,
    payload: customersArr,
  };
};
