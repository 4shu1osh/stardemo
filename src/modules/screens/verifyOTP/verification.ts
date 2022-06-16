import axios from 'axios';
import API_URL from '../../../utils/apiURL';

export default async function verification(
  userId: string,
  otp: string,
  countryCode: string,
  phoneNo: string,
) {
  console.log(userId, otp, countryCode, phoneNo);
   const res =  await axios
    .post(`${API_URL.BASE_URL}${API_URL.VERIFY_OTP}`, {
      userId,
      otp,
      countryCode,
      phoneNo,
    })

    return res;
  
}
