import { SET_CUSTOMERS_LIST_CALC } from '../actions/types';

const initialState = {
  items: [],
};

const getListCalc = (state = initialState, action) => {
  switch (action.type) {
    case SET_CUSTOMERS_LIST_CALC:
      return { ...state, items: action.payload };
    default:
      return state;
  }
};

export default getListCalc;
