import { combineReducers } from 'redux';
import estimate from './estimateReducer';
import user from './userReducer';
import customersList from './customersListReducer';
import curentCustomer from './curentCustomerReducer';
import customerListCalc from './customerCalcReducer';
import setCalcId from './setCalcIdReducer';
import changedFlag from './customerChangeFlagReducer';
import appState from './appStateReducer';

const allReducers = combineReducers({
  customersList,
  curentCustomer,
  customerListCalc,
  estimate,
  user,
  setCalcId,
  changedFlag,
  appState,
});

export default allReducers;
