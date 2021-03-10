import { combineReducers } from 'redux';
import customersList from './customersList';
import curentCustomer from './curentCustomer';

const allReducers = combineReducers({
  customersList,
  curentCustomer,
});

export default allReducers;
