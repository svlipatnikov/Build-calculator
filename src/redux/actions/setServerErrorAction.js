import { SET_SERVER_ERROR } from './types';

const setServerError = (statusCode, statusText) => ({
  type: SET_SERVER_ERROR,
  payload: { statusCode, statusText },
});

export default setServerError;
