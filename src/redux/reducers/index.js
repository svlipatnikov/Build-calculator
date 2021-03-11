import { combineReducers } from 'redux';
import customersList from './customersListReducer';
import curentCustomer from './curentCustomerReducer';
import authInfo from './authInfoReducer';

const allReducers = combineReducers({
  authInfo,
  customersList,
  curentCustomer,
});

export default allReducers;
