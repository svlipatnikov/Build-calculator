import { SET_CALCULATION_ID } from '../actions/types';

const initialState = {
  calculation: {},
};

const setCalcId = (state = initialState, action) => {
  switch (action.type) {
    case SET_CALCULATION_ID:
      return { ...state, calculation: action.payload };
    default:
      return state;
  }
};

export default setCalcId;
