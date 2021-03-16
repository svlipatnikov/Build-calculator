/* eslint-disable no-console */
/* eslint-disable prefer-template */
// const apiUrl = 'http://3.20.227.226:8000/api/v1';
const apiUrl = 'http://build-calculator-dev.spring-intensive-2021.simbirsoft1.com:8000/api/v1';

export default function sendRequest(url, method, body) {
  const token = localStorage.getItem('access_token');

  return fetch(apiUrl + url, {
    method,
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => {
      if (!response.ok) throw new Error(response.statusText);

      return response.json();
    })
    .catch((error) => {
      console.log(error);
    });
}
