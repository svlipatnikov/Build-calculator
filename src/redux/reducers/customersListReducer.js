import { SET_CUSTOMERS_LIST_DATA } from 'redux/actions/types';

const customersListInitialState = [];

export default function customersListReducer(state = customersListInitialState, action) {
  switch (action.type) {
    case SET_CUSTOMERS_LIST_DATA:
      return [...action.payload];

    default:
      return state;
  }
}
