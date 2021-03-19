import sendRequest from 'api';
import { snakeToCamelArr } from 'help';
import { SET_CUSTOMERS_LIST_DATA, SET_CUSTOMERS_LIST_IS_CHANGED } from './types';

export const getCustomersList = () => (dispatch) => {
  sendRequest('/customers/', 'GET').then((data) => {
    if (data) dispatch(setCustomersListAction(snakeToCamelArr(data)));
  });
};

export const setCustomersListAction = (customersArr) => ({
  type: SET_CUSTOMERS_LIST_DATA,
  payload: customersArr,
});

export const customersListIsChangedAction = () => ({
  type: SET_CUSTOMERS_LIST_IS_CHANGED,
});
