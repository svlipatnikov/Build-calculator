import { combineReducers } from 'redux';
import estimate from './estimateReducer';
import user from './userReducer';
import customersList from './customersListReducer';
import curentCustomer from './curentCustomerReducer';
import authInfo from './authInfoReducer';
import customerListCalc from './customer-calcReducer';
import setCalcId from './setCalcIdReducer';

const allReducers = combineReducers({
  authInfo,
  customersList,
  curentCustomer,
  customerListCalc,
  estimate,
  user,
  setCalcId,
});

export default allReducers;
