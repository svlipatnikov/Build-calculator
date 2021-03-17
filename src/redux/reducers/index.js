import { combineReducers } from 'redux';
import estimate from './estimateReducer';
import user from './userReducer';
import customersList from './customersListReducer';
import curentCustomer from './curentCustomerReducer';
import authInfo from './authInfoReducer';
import customerListCalc from './customer-calcReducer';
import setCalcId from './setCalcIdReducer';
import loader from './loaderReducer';

const allReducers = combineReducers({
  authInfo,
  customersList,
  curentCustomer,
  customerListCalc,
  estimate,
  user,
  setCalcId,
  loader,
});

export default allReducers;
