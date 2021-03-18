import { SET_LOAGING_FLAG } from './types';

const setLoadingFlag = (isLoading) => ({
  type: SET_LOAGING_FLAG,
  payload: isLoading,
});

export default setLoadingFlag;
