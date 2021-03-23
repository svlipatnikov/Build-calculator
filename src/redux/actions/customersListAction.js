import sendRequest from 'api';
import { snakeStirngsArrayToCamelStringsArray } from 'help/camelSnakeConverter';
import { SET_CUSTOMERS_LIST_DATA, SET_CUSTOMERS_LIST_IS_CHANGED } from './types';

export const getCustomersList = () => (dispatch) => {
  sendRequest('/customers/', 'GET').then((data) => {
    if (data) dispatch(setCustomersListAction(snakeStirngsArrayToCamelStringsArray(data)));
  });
};

export const setCustomersListAction = (customersArr) => ({
  type: SET_CUSTOMERS_LIST_DATA,
  payload: customersArr,
});

export const customersListIsChangedAction = () => ({
  type: SET_CUSTOMERS_LIST_IS_CHANGED,
});
