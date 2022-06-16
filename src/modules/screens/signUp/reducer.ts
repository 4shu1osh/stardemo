const initialState={
    userId: '',
    countryCode: '',
    phoneNo: '',
}

const SignUpReducer = (state = initialState, action: any) => {
    const {type, payload} = action;
    switch (type) {
      case 'SIGN_UP':
        return {...payload};
      default:
        return {state};
    }
  };
  
  export default SignUpReducer;
  