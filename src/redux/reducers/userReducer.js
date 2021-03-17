import { SET_USER_INFO, CLEAR_USER_INFO } from 'redux/actions/types';

const initialState = {
  username: '',
  firstName: '',
  secondName: '',
  lastName: '',
  email: '',
  photo: null,
  phone: '',
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case SET_USER_INFO:
      return {
        ...action.payload,
      };

    case CLEAR_USER_INFO:
      return { ...initialState };

    default:
      return state;
  }
}
