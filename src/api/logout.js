import store from 'redux/store';
import { setAuthFlag } from 'redux/actions/appStateAction';

const { dispatch } = store;

const logout = () => {
  localStorage.removeItem('access_token');
  localStorage.removeItem('refresh_token');
  dispatch(setAuthFlag(false));
};

export default logout;
