import { SET_AUTH_FLAG, SET_LOAGING_FLAG, SET_SERVER_ERROR, CLEAR_SERVER_ERROR } from 'redux/actions/types';

const initialState = {
  isAuthenticated: !!localStorage.getItem('access_token'),
  isLoading: false,
  serverError: {
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

    case SET_SERVER_ERROR:
      return {
        ...state,
        serverError: { statusCode: action.payload.statusCode, statusText: action.payload.statusText },
      };

    case CLEAR_SERVER_ERROR:
      return {
        ...state,
        serverError: { statusCode: null, statusText: '' },
      };

    default:
      return state;
  }
};

export default appStateReducer;
