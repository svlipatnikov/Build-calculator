import { SET_AUTH_FLAG } from 'redux/actions/types';

const authInfoInitialState = {
  isAuth: false,
};

export default function authInfoReducer(state = authInfoInitialState, action) {
  switch (action.type) {
    case SET_AUTH_FLAG:
      return {
        ...state,
        isAuth: action.isAuth,
      };

    default:
      return state;
  }
}
