import { SET_ERROR, CLEAR_ERROR, SET_LOAGING_FLAG, SET_AUTH_FLAG } from './types';

export const setLoadingFlag = (isLoading) => ({
  type: SET_LOAGING_FLAG,
  payload: isLoading,
});

export const setError = (statusCode, statusText, isShown = true) => ({
  type: SET_ERROR,
  payload: { statusCode, statusText, isShown },
});

export const clearError = () => ({
  type: CLEAR_ERROR,
});

export const setAuthFlag = (isAuthenticated) => ({
  type: SET_AUTH_FLAG,
  payload: isAuthenticated,
});
