import axios from 'axios';
import API_URL from '../../../utils/apiURL';
import STRINGS from '../../../utils/strings';

function signUpAction(USER: any, calbackFn: any) {
  const {name, email, password, phoneNo} = USER;
  return (dispatch: (arg0: {type: string; payload: any}) => void) => {
    axios
      .post(`${API_URL.BASE_URL + API_URL.SIGNUP}`, {
        name,
        email,
        password,
        countryCode: '+1',
        phoneNo,
      })
      .then(response => {
        dispatch({
          type: STRINGS.ACTION_TYPE.SIGN_UP,
          payload: response.data.data,
        });
      calbackFn(true);
      })
      .catch(error => {
        console.log(error);
      });
  };
}
export default signUpAction;
