import {UserCreds} from '../../../utils/types';
import axios from 'axios';
import API_URL from '../../../utils/apiURL';

function signUpAction(USER: UserCreds) {
  const {name, email, password, countryCode, phoneNo} = USER;
  return (dispatch: any) => {
    axios
      .post(`${API_URL.BASE_URL+API_URL.SIGNUP}`, {
        name,
        email,
        password,
        countryCode,
        phoneNo,
      })
      .then(response => {
        console.log(response.data.data);
        dispatch({
          type: 'SIGN_UP',
          payload: response.data.data,
        });
      })
      .catch(error => {
        console.log(error);
      });
  };
}
export default signUpAction;
