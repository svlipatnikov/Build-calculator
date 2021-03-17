/* eslint-disable no-console */
/* eslint-disable prefer-template */
import setLoadingFlag from 'redux/actions/loaderAction';
import store from 'redux/store';

const { dispatch } = store;
const apiUrl = 'http://build-calculator-dev.spring-intensive-2021.simbirsoft1.com:8000/api/v1';

export default function sendRequest(url, method, body) {
  const token = localStorage.getItem('access_token');

  // начало асинхронной загрузки данных
  dispatch(setLoadingFlag(true));

  return fetch(apiUrl + url, {
    method,
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => {
      // окончание асинхронной загрузки данных
      dispatch(setLoadingFlag(false));

      if (!response.ok) throw new Error(response.statusText);
      return response.json();
    })
    .catch((error) => {
      console.log(error);
    });
}
