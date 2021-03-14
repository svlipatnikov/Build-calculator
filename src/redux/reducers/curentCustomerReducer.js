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
        lastName: action.customer.lastName,
        firstName: action.customer.firstName,
        secondName: action.customer.secondName,
        phone: action.customer.phone,
        email: action.customer.email,
        adress: action.customer.adress,
      };

    default:
      return state;
  }
}
