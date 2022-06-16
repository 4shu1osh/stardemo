import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import CustomTextInput from '../../../components/textInput';
import styles from './style';
import {SafeAreaView} from 'react-native-safe-area-context';
import CustomButton from '../../../components/customButton';
import * as Yup from 'yup';
import {Formik} from 'formik';
import TouchableImage from '../../../components/touchableImage';
import COLORS from '../../../utils/colors';
import CheckBox from '@react-native-community/checkbox';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import signUpAction from './action';
import LOCAL_IMAGES from '../../../utils/localImages';
import ROUTE_NAMES from '../../../routes/routeNames';

const validationSchema = Yup.object({
  name: Yup.string()
    .trim()
    .min(3, 'Name should be min of 3 characters')
    .required('Name is required!'),
  phoneNo: Yup.number()
    .min(1000000000, 'Mobile number must contain 10 digits.')
    .max(9999999999, 'Mobile number must contain 10 digits.')
    .required('Mobile number is required!'),
  email: Yup.string()
    .email('Please enter a valid email')
    .required('Email is required!'),
  password: Yup.string().trim().min(1, '').required('Password is required!'),
});

const userInfo = {
  email: '',
  name: '',
  password: '',
  countryCode: '',
  phoneNo: '',
};
export default function SignUp() {
  const navigation = useNavigation<any>();

  const dispatch = useDispatch();

  const [hidePass, setHidePass] = React.useState(true);
  const [isSelected, setSelection] = React.useState(false);
  
  const eyeButton = () => (
    <TouchableImage
      onPress={() => setHidePass(!hidePass)}
      source={
        hidePass
          ? LOCAL_IMAGES.CLOSED_EYE
          : LOCAL_IMAGES.OPEN_EYE
      }
      style={styles.eye}
    />
  );

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.BLACK}}>
      <View style={styles.headerView}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={LOCAL_IMAGES.BACK_BUTTON}
            style={styles.backButton}
          />
        </TouchableOpacity>

        <Text style={styles.heading}>{'Create Account'}</Text>
        <Text style={styles.signUpText}>{'Sign Up to get started'}</Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false} bounces={false}>
        <View style={styles.container}>
          <Formik
            initialValues={userInfo}
            validationSchema={validationSchema}
            onSubmit={values => console.log(values)}>
            {({errors, touched, handleChange, handleBlur, values}) => {
              const {name, email, password, countryCode, phoneNo} = values;
              return (
                <>
                  <CustomTextInput
                    value={name}
                    label={'Full Name*'}
                    onBlur={handleBlur('name')}
                    onChangeText={handleChange('name')}
                    error={touched.name && errors.name}
                  />

                  <CustomTextInput
                    value={countryCode}
                    label={'Country Code*'}
                    onBlur={handleBlur('countryCode')}
                    onChangeText={handleChange('countryCode')}
                  />

                  <CustomTextInput
                    value={phoneNo}
                    label={'Phone Number*'}
                    onBlur={handleBlur('phoneNo')}
                    onChangeText={handleChange('phoneNo')}
                    error={touched.phoneNo && errors.phoneNo}
                  />
                  <CustomTextInput
                    value={email}
                    error={touched.email && errors.email}
                    label={'Email*'}
                    onBlur={handleBlur('email')}
                    onChangeText={handleChange('email')}
                  />
                  <CustomTextInput
                    value={password}
                    rightComponent={eyeButton}
                    error={touched.password && errors.password}
                    label={'Password*'}
                    secureTextEntry={hidePass}
                    onBlur={handleBlur('password')}
                    onChangeText={handleChange('password')}
                  />
                  <View style={styles.checkboxContainer}>
                    <CheckBox
                      value={isSelected}
                      onValueChange={setSelection}
                      boxType={'square'}
                      onFillColor={COLORS.BLUE}
                      lineWidth={2}
                      onCheckColor={'black'}
                      animationDuration={0.2}
                      style={styles.checkBox}
                      onTintColor={COLORS.BLUE}
                    />
                    <Text style={styles.terms}>I agree to the </Text>
                    <Text
                      style={[
                        styles.terms,
                        {color: COLORS.BLUE, fontWeight: '700'},
                      ]}>
                      Terms of Use*{' '}
                    </Text>
                  </View>
                  {Object.keys(errors).length ||
                  email.length == 0 ||
                  !isSelected ? (
                    <CustomButton
                      disabled={true}
                      label={'CREATE ACCOUNT'}
                      style={styles.button}
                      labelStyle={styles.label}
                      backgroundColor={COLORS.DARK_GREY}
                    />
                  ) : (
                    <CustomButton
                      disabled={false}
                      onPress={() => {
                        dispatch(signUpAction(values));
                        navigation.navigate(ROUTE_NAMES.VERIFY_OTP_SCREEN);
                      }}
                      label={'CREATE ACCOUNT'}
                      style={styles.button}
                      labelStyle={[styles.label, {color: COLORS.BLACK}]}
                      backgroundColor={COLORS.BLUE}
                    />
                  )}
                </>
              );
            }}
          </Formik>

          <View style={styles.rowView}>
            <View style={styles.line} />
            <Text style={styles.or}>{' OR '}</Text>
            <View style={styles.line} />
          </View>
          <TouchableImage
            source={LOCAL_IMAGES.GOOGLE_BUTTON}
            style={styles.socialBtn}
          />
          <TouchableImage
            source={LOCAL_IMAGES.APPLE_BUTTON}
            style={styles.socialBtn}
          />
          <View style={styles.rowView}>
            <Text style={styles.text}>{'Already a user? '}</Text>
            <Text
              onPress={() => navigation.navigate('Login')}
              style={[styles.heading, {color: COLORS.BLUE, fontSize: 20}]}>
              {'Sign In'}
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
