import { combineReducers } from 'redux';
import customersList from './customersList';
import curentCustomer from './curentCustomer';
import auth from './auth';

const allReducers = combineReducers({
  auth,
  customersList,
  curentCustomer,
});

export default allReducers;
