const base_url = 'http://3.20.227.226:8000/api/v1';

const token = () => localStorage.getItem('access_token');

export default function sendRequest(url, method, body) {
  return fetch(base_url + url, {
    method,
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token()
    }
  })
  .then(response => {
    if (!response.ok) 
      throw new Error(response.statusText);

    return response.json();
  }).catch(error => {
    console.log(error)
  })
}