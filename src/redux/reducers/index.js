import { combineReducers } from 'redux';
import user from './userReducer';
import customersList from './customersListReducer';
import currentCustomer from './currentCustomerReducer';
import customerCalcList from './customerCalcReducer';
import currentCalculation from './currentCalculationReducer';
import appState from './appStateReducer';
import newCalc from './customerNewCalcReducer';

const allReducers = combineReducers({
  customersList,
  currentCustomer,
  customerCalcList,
  user,
  currentCalculation,
  appState,
  newCalc,
});

export default allReducers;
