import axios from 'axios';
import API_URL from '../../../utils/apiURL';

export const contentAction = (authToken: string, contentCallBack: any) => {
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
      .get(`${API_URL.CONTENT}?page=1`)
      .then(response => {
          console.log(response.data);
        contentCallBack(response.data.data.result);
      })
      .catch(error => {
        console.log('content', error);
      });
  };
};
