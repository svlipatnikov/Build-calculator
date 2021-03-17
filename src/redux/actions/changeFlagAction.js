import { SET_CHANGE_FLAG } from './types';

const setChangeFlagAction = (isChange) => ({
  type: SET_CHANGE_FLAG,
  payload: isChange,
});

export default setChangeFlagAction;
