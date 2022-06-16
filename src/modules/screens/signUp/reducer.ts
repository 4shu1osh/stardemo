import STRINGS from '../../../utils/strings';

const {ACTION_TYPE} = STRINGS;

const initialState = {
  userId: '',
  countryCode: '',
  phoneNo: '',
};

const signUpReducer = (state = initialState, action: any) => {
  const {type, payload} = action;
  switch (type) {
    case ACTION_TYPE.SIGN_UP:
      return {...payload};
    default:
      return {state};
  }
};

export default signUpReducer;
