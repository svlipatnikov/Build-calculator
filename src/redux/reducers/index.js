import { combineReducers } from 'redux';
import customersList from './customersListReducer';
import curentCustomer from './curentCustomerReducer';
import authInfo from './authInfoReducer';
import customerListCalc from './customer-calc';

const allReducers = combineReducers({
  authInfo,
  customersList,
  curentCustomer,
  customerListCalc,
});

export default allReducers;
