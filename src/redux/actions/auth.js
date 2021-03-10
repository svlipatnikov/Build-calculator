import { SET_AUTH_FLAG } from '../actions/types';

export const setAuthFlagAction = (isAuth) => {
  return {
    type: SET_AUTH_FLAG,
    isAuth: isAuth,
  };
};
