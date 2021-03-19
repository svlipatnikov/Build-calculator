import { SET_CURENT_CUSTOMER_INFO, CLEAR_CURENT_CUSTOMER_INFO } from 'redux/actions/types';

const curentCustomerInfoInitialState = {
  id: null,
  lastName: '',
  firstName: '',
  secondName: '',
  phone: '',
  email: '',
  adress: '',
};

export default function curentCustomerReducer(state = curentCustomerInfoInitialState, action) {
  switch (action.type) {
    case SET_CURENT_CUSTOMER_INFO:
      return { ...action.payload };

    case CLEAR_CURENT_CUSTOMER_INFO:
      return { ...curentCustomerInfoInitialState };

    default:
      return state;
  }
}
