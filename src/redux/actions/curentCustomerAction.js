import { SET_CURENT_CUSTOMER_INFO } from './types';

const setCurentCustomerAction = (customer) => ({
  type: SET_CURENT_CUSTOMER_INFO,
  customer,
});

export default setCurentCustomerAction;
