export type User = {
    userId: string;
    phoneNo: string;
    countryCode: string;
}

export type UserCreds = {
    name: string;
    email: string;
    password: string;
    phoneNo: string;
    countryCode: string;
}

export type RootStackParamList = {
    Splash: string;
    SignUp: string;
    Login: string;
    WhoAreYou: string;
    VerifyOtp: string;
  };

