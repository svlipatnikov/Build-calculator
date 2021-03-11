import { combineReducers } from 'redux';
import customersList from './customersList';
import curentCustomer from './curentCustomer';
import customerListCalc from './customer-calc';

const allReducers = combineReducers({
  customersList,
  curentCustomer,
  customerListCalc,
});

export default allReducers;
