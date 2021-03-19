import { SET_CUSTOMERS_LIST_DATA, SET_CUSTOMERS_LIST_IS_CHANGED } from 'redux/actions/types';

const customersListInitialState = {
  isChanged: true,
  list: [],
};

export default function customersListReducer(state = customersListInitialState, action) {
  switch (action.type) {
    case SET_CUSTOMERS_LIST_DATA:
      return { ...state, list: action.payload, isChanged: false };

    case SET_CUSTOMERS_LIST_IS_CHANGED:
      return { ...state, isChanged: true };

    default:
      return state;
  }
}
