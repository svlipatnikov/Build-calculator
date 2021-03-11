import { SET_CURENT_CUSTOMER_INFO } from './types';

export const setCurentCustomerAction = (curentCustomerObj) => {
  return {
    type: SET_CURENT_CUSTOMER_INFO,
    customer: curentCustomerObj,
  };
};
