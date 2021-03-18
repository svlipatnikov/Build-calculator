/* eslint-disable consistent-return */
/* eslint-disable no-console */
/* eslint-disable prefer-template */
import setLoadingFlag from 'redux/actions/setLoadingFlagAction';
import setServerError from 'redux/actions/setServerErrorAction';
import store from 'redux/store';

const { dispatch } = store;
const apiUrl = 'http://build-calculator-dev.spring-intensive-2021.simbirsoft1.com:8000/api/v1';

// export default function sendRequest(url, method, body) {
//   const token = localStorage.getItem('access_token');

//   // начало асинхронной загрузки данных
//   dispatch(setLoadingFlag(true));

//   return fetch(apiUrl + url, {
//     method,
//     body: JSON.stringify(body),
//     headers: {
//       'Content-Type': 'application/json',
//       Authorization: `Bearer ${token}`,
//     },
//   })
//     .then((response) => {
//       // окончание асинхронной загрузки данных
//       dispatch(setLoadingFlag(false));

//       if (!response.ok) throw new Error(response.statusText);
//       return response.json();
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// }

export default async function sendRequest(url, method, body) {
  const token = localStorage.getItem('access_token');
  const fetchData = {
    method,
    // body: JSON.stringify(body),
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
      console.log(error.response.status, error.response.statusText);
      dispatch(setServerError(error.response.status, error.response.statusText));
      // TODO обработать статус ошибки
    } else {
      // ошибки соединения
      console.log(error.message);
      dispatch(setServerError(null, error.message));
    }
  }
}
