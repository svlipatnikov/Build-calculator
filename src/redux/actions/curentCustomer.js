import { SET_CURENT_CUSTOMER_INFO } from '../actions/types';

export const setCurentCustomerAction = (curentCustomerObj) => {
  return {
    type: SET_CURENT_CUSTOMER_INFO,
    payload: curentCustomerObj,
  };
};
