import * as Yup from 'yup';
import STRINGS from './strings';

const {ERROR_MSG} = STRINGS;

const validationSchema = Yup.object({
  name: Yup.string()
    .trim()
    .min(3, ERROR_MSG.ENTER_VALID_NAME)
    .required(ERROR_MSG.NAME_REQUIRED),
  phoneNo: Yup.number()
    .min(1000000000, ERROR_MSG.ENTER_VALID_PHONE_NUMBER)
    .max(9999999999, ERROR_MSG.ENTER_VALID_PHONE_NUMBER)
    .required(ERROR_MSG.PHONE_NUMBER_REQUIRED),
  email: Yup.string()
    .email(ERROR_MSG.ENTER_VALID_EMAIL)
    .required(ERROR_MSG.EMAIL_REQUIRED),
  password: Yup.string()
    .trim()
    .min(8, ERROR_MSG.ENTER_VALID_PASSWORD)
    .max(16,ERROR_MSG.ENTER_VALID_PASSWORD )
    .required(ERROR_MSG.PASSWORD_REQUIRED),
});

export default validationSchema;
