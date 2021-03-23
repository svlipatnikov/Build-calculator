import {
  SET_CURRENT_CUSTOMER_INFO,
  CLEAR_CURRENT_CUSTOMER_INFO,
  SET_CURRENT_CUSTOMER_IS_CHANGED,
  SET_CURRENT_CUSTOMER_ID,
} from 'redux/actions/types';

const currentCustomerInfoInitialState = {
  isChanged: false,
  id: null,
  lastName: '',
  firstName: '',
  secondName: '',
  phone: '',
  email: '',
  adress: '',
  calculation: [],
};

const currentCustomerReducer = (state = currentCustomerInfoInitialState, action) => {
  switch (action.type) {
    case SET_CURRENT_CUSTOMER_INFO:
      return { ...state, ...action.payload, isChanged: false };

    case CLEAR_CURRENT_CUSTOMER_INFO:
      return { ...currentCustomerInfoInitialState, isChanged: false };

    case SET_CURRENT_CUSTOMER_IS_CHANGED:
      return { ...state, isChanged: true };

    case SET_CURRENT_CUSTOMER_ID:
      return { ...currentCustomerInfoInitialState, id: action.payload, isChanged: true };

    default:
      return state;
  }
};

export default currentCustomerReducer;
