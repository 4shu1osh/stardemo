import React from 'react';
import styles from './style';
import {Formik} from 'formik';
import signUpAction from './action';
import {useDispatch} from 'react-redux';
import COLORS from '../../../utils/colors';
import STRINGS from '../../../utils/strings';
import ROUTE_NAMES from '../../../routes/routeNames';
import LOCAL_IMAGES from '../../../utils/localImages';
import {useNavigation} from '@react-navigation/native';
import CheckBox from '@react-native-community/checkbox';
import CustomTextInput from '../../../components/textInput';
import {SafeAreaView} from 'react-native-safe-area-context';
import validatioSchema from '../../../utils/validationSchema';
import TouchableImage from '../../../components/touchableImage';
import {View, Text, ScrollView, Image, TouchableOpacity} from 'react-native';
import {EnabledButton, DisabledButton} from '../../../components/customButton';

const {COMMON, LABEL} = STRINGS;

const userInitialInfo = {
  email: '',
  name: '',
  password: '',
  phoneNo: '',
};
export default function SignUp() {
  let phNo : any;

  const navigation = useNavigation<any>();

  const dispatch = useDispatch<any>();
  const [hidePass, setHidePass] = React.useState(true);
  const [isSelected, setSelection] = React.useState(false);

  const eyeButton = () => (
    <TouchableImage
      onPress={() => setHidePass(!hidePass)}
      source={hidePass ? LOCAL_IMAGES.CLOSED_EYE : LOCAL_IMAGES.OPEN_EYE}
      style={styles.eye}
    />
  );

  const onPressCreateAccount = (values: any) => {
    phNo = values.phoneNo
    dispatch(signUpAction(values, callbackFn));
  }

  const callbackFn = (val: boolean) => {
    navigation.navigate(ROUTE_NAMES.VERIFY_OTP_SCREEN, {phNo});
  }
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.BLACK}}>
      <View style={styles.headerView}>
        <TouchableOpacity
          onPress={() => navigation.navigate(ROUTE_NAMES.LOGIN_SCREEN)}>
          <Image source={LOCAL_IMAGES.BACK_BUTTON} style={styles.backButton} />
        </TouchableOpacity>

        <Text style={styles.heading}>{COMMON.CREATE_ACCOUNT}</Text>
        <Text style={styles.signUpText}>{COMMON.SIGN_UP_HEADING}</Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false} bounces={false}>
        <View style={styles.container}>
          <Formik
            initialValues={userInitialInfo}
            validationSchema={validatioSchema}
            onSubmit={values => console.log(values)}>
            {({errors, touched, handleChange, handleBlur, values}) => {
              const {name, email, password, phoneNo} = values;
              return (
                <>
                  <CustomTextInput
                    value={name}
                    label={`${LABEL.FULL_NAME}*`}
                    onBlur={handleBlur('name')}
                    onChangeText={handleChange('name')}
                    error={touched.name && errors.name}
                  />

                  <CustomTextInput
                    value={phoneNo}
                    keyboardType={'number-pad'}
                    label={`${LABEL.PHONE_NUMBER}*`}
                    onBlur={handleBlur('phoneNo')}
                    onChangeText={handleChange('phoneNo')}
                    error={touched.phoneNo && errors.phoneNo}
                  />
                  <CustomTextInput
                    value={email}
                    error={touched.email && errors.email}
                    label={`${LABEL.EMAIL}*`}
                    onBlur={handleBlur('email')}
                    onChangeText={handleChange('email')}
                  />
                  <CustomTextInput
                    value={password}
                    rightComponent={eyeButton}
                    error={touched.password && errors.password}
                    label={`${LABEL.PASSWORD}*`}
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
                      onCheckColor={COLORS.BLACK}
                      animationDuration={0.2}
                      style={styles.checkBox}
                      onTintColor={COLORS.BLUE}
                    />
                    <Text style={styles.terms}>{'I agree to the'} </Text>
                    <Text
                      style={[
                        styles.terms,
                        {color: COLORS.BLUE, fontWeight: '700'},
                      ]}>
                      {'Terms of Use* '}
                    </Text>
                  </View>
                  {Object.keys(errors).length ||
                  email.length == 0 ||
                  !isSelected ? (
                    <DisabledButton
                      label={COMMON.CREATE_ACCOUNT.toUpperCase()}
                    />
                  ) : (
                    <EnabledButton
                      onPress={() => onPressCreateAccount(values)}
                      label={COMMON.CREATE_ACCOUNT.toUpperCase()}
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
            <Text style={styles.text}>{`${COMMON.ALREADY_HAVE_ACCOUNT} `}</Text>
            <Text
              onPress={() => navigation.navigate(ROUTE_NAMES.LOGIN_SCREEN)}
              style={[styles.heading, {color: COLORS.BLUE, fontSize: 20}]}>
              {STRINGS.LABEL.SIGN_IN}
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
