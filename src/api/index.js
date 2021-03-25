import { setError, setLoadingFlag } from 'redux/actions/appStateAction';
import store from 'redux/store';
import logout from './logout';

const { dispatch } = store;
const apiUrl = process.env.REACT_APP_API_URL;

export default async function sendRequest(url, method, body) {
  const token = localStorage.getItem('access_token');
  const fetchData = {
    method,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  };
  if (body) fetchData.body = JSON.stringify(body);

  dispatch(setLoadingFlag(true));
  let data;

  try {
    const response = await fetch(apiUrl + url, fetchData);
    if (!response.ok) {
      const error = new Error();
      error.response = response;
      throw error;
    }
    const text = await response.text();
    if (text !== '') data = JSON.parse(text);
  } catch (error) {
    if (error.response) {
      switch (error.response.status) {
        case 401:
          if (new URL(error.response.url).pathname === '/api/v1/auth/jwt/create/') {
            dispatch(setError(error.response.status, error.response.statusText, false));
          } else if (new URL(error.response.url).pathname !== '/api/v1/auth/jwt/refresh/') {
            const refresh = localStorage.getItem('refresh_token');
            const tokenData = await sendRequest('/auth/jwt/refresh/', 'POST', { refresh });
            if (tokenData) {
              if (tokenData.access) {
                localStorage.setItem('access_token', tokenData.access);
                fetchData.headers.Authorization = `Bearer ${tokenData.access}`;
                const response = await fetch(apiUrl + url, fetchData);
                if (response.ok) {
                  const text = await response.text();
                  if (text !== '') data = JSON.parse(text);
                } else logout();
              } else logout();
            } else logout();
          } else dispatch(setError(error.response.status, error.response.statusText, true));
          break;
        // TODO обработка других кодов
        default:
          dispatch(setError(error.response.status, error.response.statusText, true));
      }
    } else {
      dispatch(setError(null, error.message, true));
    }
  } finally {
    dispatch(setLoadingFlag(false));
  }
  return data;
}
