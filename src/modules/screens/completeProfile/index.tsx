import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Platform,
  FlatList,
} from 'react-native';
import React from 'react';
import CustomTextInput from '../../../components/textInput';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Formik} from 'formik';
import TouchableImage from '../../../components/touchableImage';
import COLORS from '../../../utils/colors';
import CheckBox from '@react-native-community/checkbox';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import LOCAL_IMAGES from '../../../utils/localImages';
import ROUTE_NAMES from '../../../routes/routeNames';
import STRINGS from '../../../utils/strings';
import validatioSchema from '../../../utils/validationSchema';
import {EnabledButton, DisabledButton} from '../../../components/customButton';
import imagePickerFunction from '../../../utils/imagePicker';

import DatePicker from 'react-native-date-picker';
import {useSelector} from 'react-redux';

import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import FONTS from '../../../utils/fonts';


const {width} = Dimensions.get('screen');

const {COMMON, LABEL} = STRINGS;

const userInitialInfo = {
  dob: '',
  username: '',
  zipcode: '',
  bio: '',
  referralCode: '',
};

const CompleteProfile = ({route}: {route: any}) => {
  const {name} = useSelector((store: any) => store.verificationReducer);

  const [coverImage, setCoverImage] = React.useState('');
  const [profileImage, setProfileImage] = React.useState('');
  const [date, setDate] = React.useState(new Date());
  const [datePicker, setDatePicker] = React.useState(false);

  const renderItem = ({item}: any) => {
    return (
      <View style={styles.tile}>
        <Text style={styles.tileText}>{item}</Text>
      </View>
    )}
  const openDatePicker = () => {
    console.log('hellllooooooo');
    setDatePicker(true);
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.BLACK}}>
      <View style={styles.headerView}>
        <Text style={styles.heading}>{`Hi ${name}!`}</Text>
        <Text style={styles.heading}>{COMMON.GREETING_HEADING}</Text>
      </View>
      <KeyboardAwareScrollView
        extraHeight={Platform.OS == 'android' ? 50 : 170}
        showsVerticalScrollIndicator={false}
        bounces={false}>
        <View style={styles.container}>
          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.cover}
            onPress={() => imagePickerFunction(328, 200, setCoverImage)}>
            {coverImage ? (
              <Image source={{uri: coverImage}} style={styles.coverImg} />
            ) : (
              <View style={styles.coverImgBg} />
            )}
            <Image source={LOCAL_IMAGES.CAMERA} style={styles.camera} />
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.profile}
            onPress={() => imagePickerFunction(200, 200, setProfileImage)}>
            {profileImage ? (
              <Image source={{uri: profileImage}} style={styles.profileImg} />
            ) : (
              <View style={styles.profileImgBg} />
            )}
            <Image
              source={LOCAL_IMAGES.CAMERA}
              style={[styles.camera, styles.cameraProfile]}
            />
          </TouchableOpacity>
          <Formik
            initialValues={userInitialInfo}
            validationSchema={validatioSchema}
            onSubmit={values => console.log(values)}>
            {({errors, touched, handleChange, handleBlur, values}) => {
              const {username, dob, zipcode, bio, referralCode} = values;
              return (
                <React.Fragment>
                  {/* <KeyboardAwareScrollView> */}
                  <CustomTextInput
                    value={username}
                    label={`${LABEL.CHANGE_USERNAME}*`}
                    onBlur={handleBlur('username')}
                    onChangeText={handleChange('username')}
                    error={touched.username && errors.username}
                    rightComponent={() => (
                      <Image source={LOCAL_IMAGES.PENCIL} style={styles.icon} />
                    )}
                  />

                  <CustomTextInput
                    value={date.toLocaleDateString()}
                    label={`${LABEL.DOB}*`}
                    maxLength={10}
                    rightComponent={() => (
                      <TouchableImage
                        source={LOCAL_IMAGES.CALENDAR}
                        style={styles.icon}
                        onPress={openDatePicker}
                      />
                    )}
                  />
                  <CustomTextInput
                    value={zipcode}
                    label={`${LABEL.ZIPCODE}*`}
                    onBlur={handleBlur('zipcode')}
                    onChangeText={handleChange('zipcode')}
                    error={touched.zipcode && errors.zipcode}
                    rightComponent={() => (
                      <View style={styles.emptyComponent} />
                    )}
                  />

                  <CustomTextInput
                    value={bio}
                    maxLength={250}
                    // numberOfLines={4}
                    multiline={true}
                    style={[styles.input]}
                    label={`${LABEL.BIO}*`}
                    onBlur={handleBlur('bio')}
                    onChangeText={handleChange('bio')}
                    error={touched.bio && errors.bio}
                    rightComponent={() => (
                      <View style={styles.emptyComponent}>
                        <Text
                          style={styles.charLength}>{`${bio.length}/250`}</Text>
                      </View>
                    )}
                  />
                  <CustomTextInput
                    value={referralCode}
                    label={`${LABEL.REFERAL_CODE}*`}
                    onBlur={handleBlur('referralCode')}
                    onChangeText={handleChange('referralCode')}
                    error={touched.referralCode && errors.referralCode}
                    rightComponent={() => (
                      <View style={styles.emptyComponent} />
                    )}
                  />
                  {/* </KeyboardAwareScrollView> */}
                  <View style={styles.sportsList}>
                    <Text style={styles.sportsListText}>{LABEL.SPORTS_WATCH}</Text>
                    {
                      [11212,243,34535,453453,453455].map((item, index) => {
                        return (
                          <View style={styles.tile} key={index}>
                            <Text style={styles.tileText}>{item}</Text>
                            <Image source={LOCAL_IMAGES.CROSS} style={{height: 10, width: 10, resizeMode: 'contain', marginLeft: 10}}/>
                          </View>
                        )
                      })
                    }
                  </View>
                </React.Fragment>
              );
            }}
          </Formik>
        </View>
      </KeyboardAwareScrollView>
      <DatePicker
        modal
        mode="date"
        open={datePicker}
        date={date}
        onConfirm={date => {
          setDate(date);
          setDatePicker(false);
        }}
        onCancel={() => setDatePicker(false)}
        androidVariant="nativeAndroid"
      />
      {date && console.log(date)}
    </SafeAreaView>
  );
};

export default CompleteProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
    paddingHorizontal: 20,
  },
  heading: {
    color: COLORS.WHITE,
    fontSize: 28,
    fontWeight: '900',
    fontStyle: 'italic',
    lineHeight: 40,
    letterSpacing: 1,
  },

  headerView: {
    backgroundColor: COLORS.BLACK,
    paddingHorizontal: 20,
    marginTop: 10,
  },
  icon: {
    height: 20,
    width: 20,
    resizeMode: 'contain',
    alignSelf: 'flex-end',
    right: 20,
    bottom: 45,
  },
  rightArrow: {
    height: 20,
    width: 20,
    resizeMode: 'contain',
    position: 'absolute',
    top: 12,
    right: 15,
  },
  coverImgBg: {
    backgroundColor: COLORS.DARKER_GREY,
    height: 180,
    width: '100%',
    borderWidth: 2,
    borderColor: COLORS.GREY,
    borderRadius: 5,
  },
  profileImgBg: {
    backgroundColor: COLORS.DARKER_GREY,
    height: 88,
    width: 88,
    borderWidth: 2,
    borderColor: COLORS.GREY,
    borderRadius: 5,
    position: 'absolute',
    left: 43,
    top: 165,
  },
  coverImg: {
    height: 180,
    width: '100%',
    borderWidth: 2,
    borderColor: COLORS.WHITE,
    borderRadius: 5,
  },
  profileImg: {
    height: 88,
    width: 88,
    borderWidth: 2,
    borderColor: COLORS.WHITE,
    borderRadius: 5,
    position: 'absolute',
    top: 165,
    left: 43,
  },
  cover: {
    height: 180,
    width: '100%',
    marginBottom: 64,
    marginTop: 32,
  },
  profile: {
    height: 88,
    width: 88,
    position: 'absolute',
  },
  camera: {
    height: 20,
    width: 20,
    resizeMode: 'contain',
    position: 'absolute',
    top: 80,
    alignSelf: 'center',
    opacity: 0.6,
    zIndex: 1,
  },
  cameraProfile: {
    left: 78,
    top: 200,
  },
  input: {
    width: width * 0.89,
    marginVertical: 7,
    justifyContent: 'center',
  },
  text: {
    fontFamily: FONTS.HELVETICA,
    fontSize: 16,
    fontWeight: '600',
    color: COLORS.WHITE,
    marginLeft: 16,
  },
  emptyComponent: {
    height: 20,
    width: 60,
    resizeMode: 'contain',
    alignSelf: 'flex-end',
    bottom: 28,
    left: 8,
  },
  charLength: {
    color: COLORS.GREY,
    fontSize: 12,
  },
  tile: {
    height: 30,
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: COLORS.DARK_GREY,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    flexDirection: 'row',

  },
  tileText: {
    color: COLORS.WHITE,
    fontSize: 12,
    fontWeight: '900',
  },
  sportsList: {
    borderWidth: 2,
    borderColor: COLORS.WHITE,
    borderRadius: 5,
    width: width * 0.89,
    padding: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  sportsListText: { 
    color: COLORS.WHITE,
    fontSize: 12,
    backgroundColor: COLORS.BLACK,
    position: 'absolute',
    fontWeight: '600',
    top: -9,
    left: 9,
    paddingHorizontal: 3
  }
});
