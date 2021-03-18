import { SET_AUTH_FLAG, SET_LOAGING_FLAG, SET_ERROR, CLEAR_ERROR } from 'redux/actions/types';

const initialState = {
  isAuthenticated: !!localStorage.getItem('access_token'),
  isLoading: false,
  error: {
    isError: false,
    statusCode: null,
    statusText: '',
  },
};

const appStateReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTH_FLAG:
      return {
        ...state,
        isAuthenticated: action.payload,
      };

    case SET_LOAGING_FLAG:
      return {
        ...state,
        isLoading: action.payload,
      };

    case SET_ERROR:
      return {
        ...state,
        error: { statusCode: action.payload.statusCode, statusText: action.payload.statusText, isError: true },
      };

    case CLEAR_ERROR:
      return {
        ...state,
        error: { statusCode: null, statusText: '', isError: false },
      };

    default:
      return state;
  }
};

export default appStateReducer;
