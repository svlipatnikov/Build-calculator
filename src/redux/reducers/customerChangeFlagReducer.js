import { SET_CHANGE_FLAG } from '../actions/types';

const initialState = {
  isChanged: true,
};

const getChangeFlag = (state = initialState, action) => {
  switch (action.type) {
    case SET_CHANGE_FLAG:
      return { ...state, isChanged: action.payload };
    default:
      return state;
  }
};

export default getChangeFlag;
