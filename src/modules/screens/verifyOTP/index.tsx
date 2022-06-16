import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import React, {useRef} from 'react';
import styles from './style';
import {SafeAreaView} from 'react-native-safe-area-context';
import CustomButton from '../../custom/customButton';
import COLORS from '../../../utils/colors';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import verification from './verification';

export default function VerifyOTP() {

  const pin1 = useRef(null);
  const pin2 = useRef(null);
  const pin3 = useRef(null);
  const pin4 = useRef(null);
  const [otp, setOtp] = React.useState('');
  const navigation = useNavigation<any>();
  const dispatch = useDispatch();
  const {userId, countryCode, phoneNo} = useSelector(
    (store: any) => store.SignUpReducer,
  );
  const [time, setTime] = React.useState(5);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setTime(time => time - 1);      
    }, 1000);
    return () => clearInterval(interval);
  }, [time > 0]);

  const checkOTP = async () => {
    const res = await verification(userId, otp, countryCode, phoneNo)
    console.log('SSSS', res)
  }

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'black'}}>
      <View style={styles.headerView}>
        <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
          <Image
            source={require('../../../assets/images/backButton.png')}
            style={styles.backButton}
          />
        </TouchableOpacity>

        <Text style={styles.heading}>{'Enter Verification Code'}</Text>
        <Text style={styles.info}>
          {`Kindly enter the 4 digit verification code sent to ${
            countryCode + phoneNo
          }  `}
          <Text onPress={() => navigation.navigate('SignUp')} style={styles.editButton}>
            {"Edit"}
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

              pin2.current.focus();
            }}
            maxLength={1}
            style={styles.input}
          />
          <TextInput
            ref={pin2}
            onChangeText={text => {
              setOtp(otp => otp + text);

              pin3.current.focus();
            }}
            maxLength={1}
            style={styles.input}
          />
          <TextInput
            ref={pin3}
            onChangeText={text => {
              setOtp(otp => otp + text);

              pin4.current.focus();
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

        {otp.length ==4 ? (
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
           
       {  time > 0 ?
        <View style={styles.timerView}>
            <Image
            source={require('../../../assets/images/timer.png')}
            style={styles.timer}
            />

          <Text style={styles.time}>{` ${time}`}</Text>
          </View>
          :
          <>
          <Text style={styles.info}>{`Didn't Receive the Code yet? `}</Text>
          <Text style={[styles.heading, {fontSize: 18, color: COLORS.BLUE}]}>
            {'Resend Verification Code'}
          </Text></>
          }
          
        </View>
      </View>
      <ImageBackground
        source={require('../../../assets/images/bmx1.png')}
        style={styles.bmx}>
      </ImageBackground>
      
    </SafeAreaView>
  );
}
