import { SET_CHANGE_FLAG } from '../actions/types';

const initialState = {
  isChange: true,
};

const getChangeFlag = (state = initialState, action) => {
  switch (action.type) {
    case SET_CHANGE_FLAG:
      return { ...state, isChange: action.payload };
    default:
      return state;
  }
};

export default getChangeFlag;
