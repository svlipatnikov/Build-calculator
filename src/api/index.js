/* eslint-disable consistent-return */
import { setError, setLoadingFlag } from 'redux/actions/appStateAction';
import store from 'redux/store';

const { dispatch } = store;
const apiUrl = 'http://build-calculator-dev.spring-intensive-2021.simbirsoft1.com:8000/api/v1';

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

  try {
    const response = await fetch(apiUrl + url, fetchData);
    if (!response.ok) {
      const error = new Error();
      error.response = response;
      throw error;
    }
    try {
      const data = await response.json();
      return data;
    } catch {
      // TODO ошибка извлечения Json
    }
  } catch (error) {
    if (error.response) {
      switch (error.response.status) {
        case 401:
          dispatch(setError(error.response.status, error.response.statusText, false));
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
}
