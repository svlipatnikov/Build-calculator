import { combineReducers } from 'redux';
import user from './userReducer';
import customersList from './customersListReducer';
import curentCustomer from './curentCustomerReducer';
import customerListCalc from './customerCalcReducer';
import currentCalculation from './currentCalculationReducer';
import changedFlag from './customerChangeFlagReducer';
import appState from './appStateReducer';
import newCalc from './customerNewCalcReducer';

const allReducers = combineReducers({
  customersList,
  curentCustomer,
  customerListCalc,
  user,
  currentCalculation,
  changedFlag,
  appState,
  newCalc,
});

export default allReducers;
