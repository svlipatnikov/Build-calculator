import { combineReducers } from 'redux';
import estimate from './estimateReducer';
import user from './userReducer';
import customersList from './customersListReducer';
import curentCustomer from './curentCustomerReducer';
import authInfo from './authInfoReducer';
import customerListCalc from './customerCalcReducer';
import setCalcId from './setCalcIdReducer';
import loader from './loaderReducer';
import changeFlag from './changeFlagReducer';

const allReducers = combineReducers({
  authInfo,
  customersList,
  curentCustomer,
  customerListCalc,
  estimate,
  user,
  setCalcId,
  loader,
  changeFlag,
});

export default allReducers;
