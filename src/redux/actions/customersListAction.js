import { SET_CUSTOMERS_LIST_DATA } from './types';

const setCustomersListAction = (customersArr) => ({
  type: SET_CUSTOMERS_LIST_DATA,
  payload: customersArr,
});

export default setCustomersListAction;
