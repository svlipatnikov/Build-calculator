import { SET_AUTH_FLAG } from './types';

export const setAuthFlagAction = (isAuthenticated) => {
  return {
    type: SET_AUTH_FLAG,
    isAuthenticated: isAuthenticated,
  };
};
