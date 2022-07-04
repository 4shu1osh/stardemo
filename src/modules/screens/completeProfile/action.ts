import axios from 'axios';
import API_URL from '../../../utils/apiURL';

export const sportsAction = (authToken: string, callback: Function) => {
  return () => {
    const $https = axios.create({
      baseURL: API_URL.BASE_URL,
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    });

    $https.defaults.headers.common.Authorization = `Bearer ${authToken}`;
    $https
      .get(`${API_URL.SPORTS}`)
      .then(response => {
        console.log(response);

        callback(response.data.data);
      })
      .catch(error => {
        console.log('sports', error);
      });
  };
};

export const zipCodeAction = (
  authToken: string,
  callback: Function,
  page: number = 1,
  search: string = '1',
) => {
  return () => {
    const $https = axios.create({
      baseURL: API_URL.BASE_URL,
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    });

    $https.defaults.headers.common.Authorization = `Bearer ${authToken}`;
    $https
      .get(`${API_URL.ZIPCODE}?limit=10&page=${page}&search=${search}`)
      .then(response => {
        callback(response.data.data.result);
      })
      .catch(error => {
        console.log('zipppp===', error);
      });
  };
};
