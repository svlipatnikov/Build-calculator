import { SET_CURENT_CUSTOMER_INFO } from '../actions/types';

const curentCustomerInfoInitialState = {
  id: null,
  name: null,
  info: null,
};

export default function curentCustomerReducer(state = curentCustomerInfoInitialState, action) {
  switch (action.type) {
    case SET_CURENT_CUSTOMER_INFO:
      return {
        id: action.payload.id,
        name: action.payload.name,
        info: action.payload.info,
      };

    default:
      return state;
  }
}
