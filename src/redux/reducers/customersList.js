import { SET_CUSTOMERS_LIST_DATA } from '../actions/types';

const customersListInitialState = [];

export default function customersListReducer(state = customersListInitialState, action) {
  switch (action.type) {
    case SET_CUSTOMERS_LIST_DATA:
      return [...state, ...action.payload];

    default:
      return state;
  }
}
