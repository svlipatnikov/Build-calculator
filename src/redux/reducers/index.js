import { combineReducers } from 'redux';
import customersList from './customersList';
import curentCustomer from './curentCustomer';
import estimate from './estimate';
import user from './user';

const allReducers = combineReducers({
  customersList,
  curentCustomer,
  estimate,
  user,
});

export default allReducers;