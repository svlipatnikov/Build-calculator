import { SET_CURRENT_CALCULATION } from '../actions/types';

const initialState = {
  calculation: {},
};

const currentCalculationReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_CALCULATION:
      return { ...state, calculation: action.payload };
    default:
      return state;
  }
};

export default currentCalculationReducer;