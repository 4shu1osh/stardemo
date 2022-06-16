import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import React, {useRef, useEffect, useState} from 'react';
import styles from './style';
import {SafeAreaView} from 'react-native-safe-area-context';
import CustomButton from '../../../components/customButton';
import COLORS from '../../../utils/colors';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import verification from './verification';
import returnTimerValue from '../../../utils/timeInterval';
import CustomModal from '../../../components/modal';
import ROUTE_NAMES from '../../../routes/routeNames';
import LOCAL_IMAGES from '../../../utils/localImages';


export default function VerifyOTP() {

  const pin1 = useRef<TextInput>(null);
  const pin2 = useRef<TextInput>(null);
  const pin3 = useRef<TextInput>(null);
  const pin4 = useRef<TextInput>(null);

  const navigation = useNavigation<any>();
  
  const {userId, countryCode, phoneNo} = useSelector(
    (store: any) => store.signUpReducer,
    );
    
  const [otp, setOtp] = useState('');
  const [visible, setVisible] = useState(false);
  const [timerCount, setTimerCount] = useState(100);

  useEffect(() => {
    let interval = setInterval(() => {
      setTimerCount(lastTimerCount => {
        lastTimerCount <= 1 && clearInterval(interval);
        return lastTimerCount - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const checkOTP = async () => {
    const res = await verification(userId, otp, countryCode, phoneNo);
     res.status === 200 && setVisible(true);
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.BLACK}}>
      <View style={styles.headerView}>
        <TouchableOpacity onPress={() => navigation.navigate(ROUTE_NAMES.SIGN_UP_SCREEN)}>
          <Image
            source={LOCAL_IMAGES.BACK_BUTTON}
            style={styles.backButton}
          />
        </TouchableOpacity>

        <Text style={styles.heading}>{'Enter Verification Code'}</Text>
        <Text style={styles.info}>
          {`Kindly enter the 4 digit verification code sent to ${
            countryCode + phoneNo
          }  `}
          <Text
            onPress={() => navigation.navigate(ROUTE_NAMES.SIGN_UP_SCREEN)}
            style={styles.editButton}>
            {'Edit'}
          </Text>
        </Text>
      </View>

      <View style={styles.container}>
        <View style={styles.rowView}>
          <TextInput
            ref={pin1}
            autoFocus={true}
            onChangeText={text => {
              setOtp(otp => otp + text);
              pin2?.current?.focus();
            }}
            maxLength={1}
            style={styles.input}
          />
          <TextInput
            ref={pin2}
            onChangeText={text => {
              setOtp(otp => otp + text);
              pin3?.current?.focus();
            }}
            maxLength={1}
            style={styles.input}
          />
          <TextInput
            ref={pin3}
            onChangeText={text => {
              setOtp(otp => otp + text);
              pin4?.current?.focus();
            }}
            maxLength={1}
            style={styles.input}
          />
          <TextInput
            ref={pin4}
            onChangeText={text => {
              setOtp(otp => otp + text);
              pin4.current.blur();
            }}
            maxLength={1}
            style={styles.input}
          />
        </View>

        {otp.length == 4 ? (
          <CustomButton
            onPress={checkOTP}
            disabled={false}
            label={'SUBMIT'}
            style={styles.button}
            labelStyle={styles.label}
            backgroundColor={COLORS.BLUE}
          />
        ) : (
          <CustomButton
            disabled={true}
            label={'SUBMIT'}
            style={styles.button}
            labelStyle={[styles.label, {color: COLORS.GREY}]}
            backgroundColor={COLORS.DARK_GREY}
          />
        )}
        <View style={styles.colView}>
          {timerCount > 0 ? (
            <View style={styles.timerView}>
              <Image
                source={LOCAL_IMAGES.TIMER}
                style={styles.timer}
              />
              <Text style={styles.time}> {returnTimerValue(timerCount)}</Text>
            </View>
          ) : (
            <>
              <Text style={styles.info}>{`Didn't Receive the Code yet? `}</Text>
              <Text
                style={[styles.heading, {fontSize: 18, color: COLORS.BLUE}]}>
                {'Resend Verification Code'}
              </Text>
            </>
          )}
        </View>
      </View>
      <ImageBackground
        source={LOCAL_IMAGES.BMX1}
        style={styles.bmx}></ImageBackground>
        <CustomModal visibleValue={true} buttonLabel={"CONTINUE"}/>
    </SafeAreaView>
  );
}
