/* eslint-disable consistent-return */
import setLoadingFlag from 'redux/actions/setLoadingFlagAction';
import setServerError from 'redux/actions/setServerErrorAction';
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

  // начало асинхронной загрузки данных
  dispatch(setLoadingFlag(true));

  try {
    const response = await fetch(apiUrl + url, fetchData);
    if (!response.ok) {
      const error = new Error();
      error.response = response;
      throw error;
    }
    const data = await response.json();
    // окончание асинхронной загрузки данных
    dispatch(setLoadingFlag(false));
    return data;
  } catch (error) {
    // окончание асинхронной загрузки данных
    dispatch(setLoadingFlag(false));

    if (error.response) {
      // ответ сервера
      dispatch(setServerError(error.response.status, error.response.statusText));
    } else {
      // ошибки соединения
      dispatch(setServerError(null, error.message));
    }
  }
}
