import { SET_CHANGE_FLAG } from './types';

const setChangeFlagAction = (isChanged) => ({
  type: SET_CHANGE_FLAG,
  payload: isChanged,
});

export default setChangeFlagAction;
