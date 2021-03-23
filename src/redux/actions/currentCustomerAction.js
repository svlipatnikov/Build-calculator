import sendRequest from 'api';
import { snakeStringObjectToCamelStringObject, camelStringObjectToSnakeStringObject } from 'help/camelSnakeConverter';
import { customersListIsChangedAction } from './customersListAction';
import {
  SET_CURRENT_CUSTOMER_INFO,
  CLEAR_CURRENT_CUSTOMER_INFO,
  SET_CURRENT_CUSTOMER_ID,
  SET_CURRENT_CUSTOMER_IS_CHANGED,
} from './types';

export const setCurrentCustomerAction = (customer) => ({
  type: SET_CURRENT_CUSTOMER_INFO,
  payload: customer,
});

export const getCurrentCustomer = (id) => (dispatch) => {
  sendRequest(`/customers/${id}/`, 'GET').then((res) => {
    dispatch(setCurrentCustomerAction(snakeStringObjectToCamelStringObject(res)));
  });
};

export const createNewCustomer = (customerInfo) => (dispatch) => {
  sendRequest('/customers/', 'POST', camelStringObjectToSnakeStringObject(customerInfo)).then(() => {
    dispatch(customersListIsChangedAction());
  });
};

export const updateCustomer = (customer) => (dispatch) => {
  sendRequest(`/customers/${customer.id}/`, 'PATCH', camelStringObjectToSnakeStringObject(customer)).then((res) => {
    dispatch(setCurrentCustomerAction(snakeStringObjectToCamelStringObject(res)));
    dispatch(customersListIsChangedAction());
  });
};

export const removeCurrentCustomerCalculation = (id) => (dispatch) => {
  sendRequest(`/calculation/${id}`, 'DELETE', { id }).then(() => {
    dispatch(setCurrentCustomerIsChangedAction());
  });
};

export const clearCurrentCustomerAction = () => ({
  type: CLEAR_CURRENT_CUSTOMER_INFO,
});

export const setCurrentCustomerId = (id) => ({
  type: SET_CURRENT_CUSTOMER_ID,
  payload: id,
});

export const setCurrentCustomerIsChangedAction = () => ({
  type: SET_CURRENT_CUSTOMER_IS_CHANGED,
});
