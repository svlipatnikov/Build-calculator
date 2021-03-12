import { SET_AUTH_FLAG } from 'redux/actions/types';

const authInfoInitialState = {
  isAuthenticated: false,
};

export default function authInfoReducer(state = authInfoInitialState, action) {
  switch (action.type) {
    case SET_AUTH_FLAG:
      return {
        ...state,
        isAuthenticated: action.isAuthenticated,
      };

    default:
      return state;
  }
}
