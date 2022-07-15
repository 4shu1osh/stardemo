import {
  Text,
  View,
  Image,
  TextInput,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import styles from './style';
import verification from './action';
import COLORS from '../../../utils/colors';
import STRINGS from '../../../utils/strings';
import CustomModal from '../../../components/modal';
import ROUTE_NAMES from '../../../routes/routeNames';
import {useSelector, useDispatch} from 'react-redux';
import LOCAL_IMAGES from '../../../utils/localImages';
import {useNavigation} from '@react-navigation/native';
import React, {useRef, useEffect, useState} from 'react';
import returnTimerValue from '../../../utils/timeInterval';
import {SafeAreaView} from 'react-native-safe-area-context';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import {EnabledButton, DisabledButton} from '../../../components/customButton';

const {COMMON, LABEL} = STRINGS;

export default function VerifyOTP({route}: any) {
  const {phNo} = route.params;

  const pin1 = useRef<TextInput>(null);
  const pin2 = useRef<TextInput>(null);
  const pin3 = useRef<TextInput>(null);
  const pin4 = useRef<TextInput>(null);

  const navigation = useNavigation<any>();
  const dispatch = useDispatch<any>();

  const {userId, countryCode, phoneNo} = useSelector(
    (store: any) => store.signUpReducer,
  );

  const [otp, setOtp] = useState('');
  const [visible, setVisible] = useState(false);
  const [timerCount, setTimerCount] = useState(10);

  useEffect(() => {
    let interval = setInterval(() => {
      setTimerCount(lastTimerCount => {
        lastTimerCount <= 1 && clearInterval(interval);
        return lastTimerCount - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const callbackFn = (status: boolean) => {
    setVisible(status);
  };

  const openModal = () => {
    return (
      <CustomModal
        visibleValue={true}
        buttonLabel={STRINGS.LABEL.CONTINUE}
        callbackFn={() => navigation.navigate(ROUTE_NAMES.WHO_ARE_YOU)}
      />
    );
  };

  const checkOTP = () => {
    dispatch(verification(userId, otp, countryCode, phoneNo, callbackFn));
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.BLACK}}>
      <View style={styles.headerView}>
        <TouchableOpacity
          onPress={() => navigation.navigate(ROUTE_NAMES.SIGN_UP_SCREEN)}>
          <Image source={LOCAL_IMAGES.BACK_BUTTON} style={styles.backButton} />
        </TouchableOpacity>

        <Text style={styles.heading}>{COMMON.VERIFY_OTP_HEADING}</Text>
        <Text style={styles.info}>
          {`${COMMON.ENTER_CODE} ${countryCode + phNo}  `}
          <Text
            onPress={() => navigation.navigate(ROUTE_NAMES.SIGN_UP_SCREEN)}
            style={styles.editButton}>
            {'Edit'}
          </Text>
        </Text>
      </View>

      <View style={styles.container}>
        <OTPInputView
          pinCount={4}
          autoFocusOnLoad={true}
          keyboardType='number-pad'
          style={styles.rowView}
          codeInputFieldStyle={styles.input}
          codeInputHighlightStyle={styles.underlineStyleHighLighted}
          onCodeFilled={code => {
            setOtp(code)
          }}
        />

        {otp.length == 4 ? (
          <EnabledButton
            onPress={checkOTP}
            label={LABEL.SUBMIT.toUpperCase()}
          />
        ) : (
          <DisabledButton label={LABEL.SUBMIT.toUpperCase()} />
        )}
        <View style={styles.colView}>
          {timerCount > 0 ? (
            <View style={styles.timerView}>
              <Image source={LOCAL_IMAGES.TIMER} style={styles.timer} />
              <Text style={styles.time}> {returnTimerValue(timerCount)}</Text>
            </View>
          ) : (
            <React.Fragment>
              <Text style={styles.info}>{COMMON.DIDNT_RECEIVE_CODE}</Text>
              <Text
                style={[styles.heading, {fontSize: 18, color: COLORS.BLUE}]}>
                {COMMON.RESEND_CODE}
              </Text>
            </React.Fragment>
          )}
        </View>
      </View>
      <ImageBackground
        source={LOCAL_IMAGES.BMX1}
        style={styles.bmx}></ImageBackground>
      {visible && openModal()}
    </SafeAreaView>
  );
}
