import axios from 'axios';
import API_URL from '../../../utils/apiURL';

export const sportsAction = (callback: any) => {
  axios
    .get(`${API_URL.BASE_URL}${API_URL.SPORTS}`)
    .then(response => {
        console.log("sports datra=====", response.data);
      callback(response.data);
    })
    .catch(error => {
      console.log(error);
    });
};
