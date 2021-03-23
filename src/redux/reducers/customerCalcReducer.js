import { SET_CUSTOMER_CALC_LIST, SET_CUSTOMER_CALC_LIST_IS_CHANGED, SET_MATERIALS } from '../actions/types';

const initialState = {
  isChanged: true,
  calculations: [],
  materials: [],
};

const customerCalcReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CUSTOMER_CALC_LIST:
      return { ...state, calculations: action.payload, isChanged: false };
    case SET_MATERIALS:
      return { ...state, materials: action.payload, isChanged: false };
    case SET_CUSTOMER_CALC_LIST_IS_CHANGED:
      return { ...state, isChanged: true };
    default:
      return state;
  }
};

export default customerCalcReducer;
