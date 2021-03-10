import { SET_AUTH_FLAG } from '../actions/types';

const authInitialState = false;

export default function authReducer(state = authInitialState, action) {
  switch (action.type) {
    case SET_AUTH_FLAG:
      return action.isAuth;

    default:
      return state;
  }
}
