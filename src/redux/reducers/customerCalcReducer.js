import { SET_CUSTOMERS_LIST_CALC, SET_MATERIALS } from '../actions/types';

const initialState = {
  items: [],
  materials: [],
};

const getListCalc = (state = initialState, action) => {
  switch (action.type) {
    case SET_CUSTOMERS_LIST_CALC:
      return { ...state, items: action.payload };
    case SET_MATERIALS:
      return { ...state, materials: action.payload };
    default:
      return state;
  }
};

export default getListCalc;
