import { SET_CURENT_CUSTOMER_INFO } from 'redux/actions/types';

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
      return { ...action.customer };

    default:
      return state;
  }
}
