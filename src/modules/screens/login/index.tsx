import {View, Text, ScrollView, Alert} from 'react-native';
import React from 'react';
import CustomTextInput from '../../custom/textInput';
import styles from './style';
import {SafeAreaView} from 'react-native-safe-area-context';
import CustomButton from '../../custom/customButton';
import * as Yup from 'yup';
import {Formik} from 'formik';
import TouchableImage from '../../custom/touchableImage';
import COLORS from '../../../utils/colors';
import {useNavigation} from '@react-navigation/native';

const validationSchema = Yup.object({
  email: Yup.string()
    .email('Please enter a valid email')
    .required('Email is required!'),
  password: Yup.string().trim().min(1, '').required('Password is required!'),
});

const userInfo = {
  email: '',
  password: '',
};
export default function Login() {
  const [hidePass, setHidePass] = React.useState(true);
  const navigation = useNavigation<any>();

  const eyeButton = () => (
    <TouchableImage
      onPress={() => setHidePass(!hidePass)}
      source={
        hidePass
          ? require('../../../assets/images/ClosedEye.png')
          : require('../../../assets/images/OpenEye.png')
      }
      style={styles.eye}
    />
  );

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'black'}}>
      <ScrollView showsVerticalScrollIndicator={false} bounces={false}>
        <View style={styles.container}>
          <Text style={styles.heading}>
            {'Sign In Using Your Mobile Number / Email'}
          </Text>

          <Formik
            initialValues={userInfo}
            validationSchema={validationSchema}
            onSubmit={values => console.log(values)}>
            {({errors, touched, handleChange, handleBlur, values}) => {
              return (
                <>
                  <CustomTextInput
                    error={touched.email && errors.email}
                    label={'Email'}
                    onBlur={handleBlur('email')}
                    onChangeText={handleChange('email')}
                  />
                  <CustomTextInput
                    rightComponent={eyeButton}
                    error={touched.password && errors.password}
                    label={'Password'}
                    secureTextEntry={hidePass}
                    onBlur={handleBlur('password')}
                    onChangeText={handleChange('password')}
                  />

                  <Text style={styles.forgotPassword}>Forgot Password?</Text>
                  {Object.keys(errors).length || values.email.length == 0 ? (
                    <CustomButton
                      disabled={true}
                      label={'SIGN IN'}
                      style={styles.button}
                      labelStyle={styles.label}
                      backgroundColor={COLORS.DARK_GREY}
                    />
                  ) : (
                    <CustomButton
                      disabled={false}
                      onPress={() => Alert.alert('signed in')}
                      label={'SIGN IN'}
                      style={styles.button}
                      labelStyle={[styles.label, {color: 'black'}]}
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
            source={require('../../../assets/images/googleButton.png')}
            style={styles.socialBtn}
          />
          <TouchableImage
            source={require('../../../assets/images/appleButton.png')}
            style={styles.socialBtn}
          />
          <View style={styles.rowView}>
            <Text style={styles.text}>{"I'm a new user "}</Text>
            <Text
              onPress={() => navigation.navigate('SignUp')}
              style={[styles.heading, {color: COLORS.BLUE, fontSize: 20}]}>
              {'Sign Up'}
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
