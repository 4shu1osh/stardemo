import {View, Text, ScrollView, Alert} from 'react-native';
import React from 'react';
import CustomTextInput from '../../../components/textInput';
import styles from './style';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Formik} from 'formik';
import TouchableImage from '../../../components/touchableImage';
import COLORS from '../../../utils/colors';
import {useNavigation} from '@react-navigation/native';
import LOCAL_IMAGES from '../../../utils/localImages';
import STRINGS from '../../../utils/strings';
import ROUTE_NAMES from '../../../routes/routeNames';
import validatioSchema from '../../../utils/validationSchema';
import { DisabledButton, EnabledButton } from '../../../components/customButton';

const {COMMON, LABEL} = STRINGS;

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
      source={hidePass ? LOCAL_IMAGES.CLOSED_EYE : LOCAL_IMAGES.OPEN_EYE}
      style={styles.eye}
    />
  );

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.BLACK}}>
      <ScrollView showsVerticalScrollIndicator={false} bounces={false}>
        <View style={styles.container}>
          <Text style={styles.heading}>{COMMON.SIGN_IN_HEADING}</Text>

          <Formik
            initialValues={userInfo}
            validationSchema={validatioSchema}
            onSubmit={values => console.log(values)}>
            {({errors, touched, handleChange, handleBlur, values}) => {
              return (
                <React.Fragment>
                  <CustomTextInput
                    error={touched.email && errors.email}
                    label={LABEL.EMAIL}
                    onBlur={handleBlur('email')}
                    onChangeText={handleChange('email')}
                  />
                  <CustomTextInput
                    rightComponent={eyeButton}
                    error={touched.password && errors.password}
                    label={LABEL.PASSWORD}
                    secureTextEntry={hidePass}
                    onBlur={handleBlur('password')}
                    onChangeText={handleChange('password')}
                  />

                  <Text style={styles.forgotPassword}>
                    {COMMON.FORGOT_PASSWORD}
                  </Text>
                  {Object.keys(errors).length || values.email.length == 0 ? (
                    <DisabledButton
                      label={LABEL.SIGN_IN.toUpperCase()}
                    />
                  ) : (
                    <EnabledButton
                      onPress={() => Alert.alert('signed in')}
                      label={LABEL.SIGN_IN.toUpperCase()}
                    />
                  )}
                </React.Fragment>
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
            <Text style={styles.text}>{COMMON.NEW_USER}</Text>
            <Text
              onPress={() => navigation.navigate(ROUTE_NAMES.SIGN_UP_SCREEN)}
              style={[styles.heading, {color: COLORS.BLUE, fontSize: 20}]}>
              {LABEL.SIGN_UP}
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
