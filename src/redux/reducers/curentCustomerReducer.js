import { SET_CURENT_CUSTOMER_INFO } from 'redux/actions/types';

const curentCustomerInfoInitialState = {
  id: null,
  name: null,
  info: null,
};

export default function curentCustomerReducer(state = curentCustomerInfoInitialState, action) {
  switch (action.type) {
    case SET_CURENT_CUSTOMER_INFO:
      return {
        id: action.customer.id,
        name: action.customer.name,
        info: action.customer.info,
      };

    default:
      return state;
  }
}
