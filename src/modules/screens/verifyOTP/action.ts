import axios from 'axios';
import API_URL from '../../../utils/apiURL';
import {AnyAction, Dispatch} from 'redux';


export default function verification(
  userId: string,
  otp: string,
  countryCode: string,
  phoneNo: string,
  callbackFn: any
) {
return async(dispatch: Dispatch<AnyAction>) => {

  const data = {
    userId,
    otp,
    countryCode,
    phoneNo,
  };

  try {
    const response = await axios.post(`${API_URL.BASE_URL}${API_URL.VERIFY_OTP}`, data);
    if (response.status === 200) {
      console.log(response.data.data);
      dispatch({
        type: 'VERIFICATION_SUCCESS',
        payload: response.data.data,
      });
      callbackFn(true)
    }
  } catch (error: any) {
    console.log(error);
  }
return
}
}

