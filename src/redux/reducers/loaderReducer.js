import { SET_LOAGING_FLAG } from 'redux/actions/types';

const loaderInitialState = {
  isLoading: false,
};

const loaderReducer = (state = loaderInitialState, action) => {
  switch (action.type) {
    case SET_LOAGING_FLAG:
      return { isLoading: action.payload };

    default:
      return state;
  }
};

export default loaderReducer;
