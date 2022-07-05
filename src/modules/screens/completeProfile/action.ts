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
  search: string = '',
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

export const checkUserNameAction = (
  authToken: string,
  callback: Function,
  username: string,
  id: string,
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
      .get(`${API_URL.CHECK_USERNAME}?username=${username}`)
      .then(response => {
        console.log("suggestions === ", response)
        callback(response.data.data);
      })
      .catch(error => {
        console.log("helloooooo==========>", error.response.data.data.names)
        if(error.response.data.type == 'USERNAME_NOT_AVAILABLE'){
          callback(error.response.data.data.names, error.response.data.message);
        }
      });
  };
}
