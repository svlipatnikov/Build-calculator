import { SET_LOAGING_FLAG } from './types';

const setLoadingFlag = (flag) => ({
  type: SET_LOAGING_FLAG,
  payload: flag,
});

export default setLoadingFlag;
