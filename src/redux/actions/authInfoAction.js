import { SET_AUTH_FLAG } from './types';

const setAuthFlagAction = (isAuthenticated) => ({
  type: SET_AUTH_FLAG,
  isAuthenticated,
});

export default setAuthFlagAction;
