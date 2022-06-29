import STRINGS from '../../../utils/strings';

const {ACTION_TYPE} = STRINGS;

const initialState = {
  userId: '',
  countryCode: '',
  phoneNo: '',
};

const verificationReducer = (state = initialState, action: any) => {
  const {type, payload} = action;
  switch (type) {
    case ACTION_TYPE.VERIFICATION_SUCCESS:
        console.log("payload",payload);
      return {...payload};
    default:
      return {state};
  }
};

export default verificationReducer;
