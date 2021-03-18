import { SET_USER_INFO, CLEAR_USER_INFO } from 'redux/actions/types';

export const setUserInfo = (userInfo) => ({
  type: SET_USER_INFO,
  payload: userInfo,
});

export const clearUserInfo = () => ({
  type: CLEAR_USER_INFO,
});
