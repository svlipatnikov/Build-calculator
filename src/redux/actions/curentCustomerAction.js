import sendRequest from 'api';
import { snakeToCamelObj } from 'help';
import { SET_CURENT_CUSTOMER_INFO } from './types';

export const setCurentCustomerAction = (customer) => ({
  type: SET_CURENT_CUSTOMER_INFO,
  customer,
});

export const getCurrentCustomer = (id) => (dispatch) => {
  sendRequest(`/customers/${id}/`, 'GET')
    .then((res) => dispatch(
      setCurentCustomerAction(snakeToCamelObj(res)),
    ));
};