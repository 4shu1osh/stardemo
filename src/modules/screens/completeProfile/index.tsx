import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Platform,
} from 'react-native';
import React from 'react';
import CustomTextInput from '../../../components/textInput';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Formik} from 'formik';
import TouchableImage from '../../../components/touchableImage';
import COLORS from '../../../utils/colors';
import LOCAL_IMAGES from '../../../utils/localImages';
import STRINGS from '../../../utils/strings';
import validatioSchema from '../../../utils/validationSchema';
import imagePickerFunction from '../../../utils/imagePicker';
import DatePicker from 'react-native-date-picker';
import {useSelector} from 'react-redux';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import FONTS from '../../../utils/fonts';
import {useNavigation} from '@react-navigation/native';
import ROUTE_NAMES from '../../../routes/routeNames';
import SelectIdentity from '../../../components/modal/selectIdentity';

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
  const [sports, setSports] = React.useState({});
  const [identity, setIdentity] = React.useState('');
  const [identityModal, setIdentityModal] = React.useState(false);
  const [zip, setZip] = React.useState('');

  const navigation = useNavigation<any>();

  const navigateToSports = () =>
    navigation.navigate(ROUTE_NAMES.SELECT_SPORTS, {
      callbackFn,
      sports,
    });

  const navigateToZipCode = () =>
    navigation.navigate(ROUTE_NAMES.ZIP_CODE, {
      zipCallback,
    });

  const callbackFn = (list: any) => {
    setSports(list);
  };

  const zipCallback = (res: any) => {
    setZip(res);
  };

  const openDatePicker = () => {
    setDatePicker(true);
  };

  const modalCallback = (identity: string) => {
    setIdentity(identity);
    setIdentityModal(false);
  };

  const openModal = () => {
    setIdentityModal(!identityModal);
  };

  React.useEffect(() => {
    setSports(sports);
  }, [sports]);

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
                    value={identity}
                    label={`${LABEL.SELECT_IDENTITY}*`}
                    onFocus={openModal}
                    caretHidden={true}
                    rightComponent={() => (
                      <TouchableImage
                        source={LOCAL_IMAGES.RIGHT_ARROW}
                        style={styles.icon}
                        onPress={openModal}
                      />
                    )}
                  />

                  <CustomTextInput
                    value={date.toLocaleDateString()}
                    label={`${LABEL.DOB}*`}
                    onFocus={openDatePicker}
                    careHidden={true}
                    rightComponent={() => (
                      <TouchableImage
                        source={LOCAL_IMAGES.CALENDAR}
                        style={styles.icon}
                        onPress={openDatePicker}
                      />
                    )}
                  />
                  <CustomTextInput
                    value={zip}
                    label={`${LABEL.ZIPCODE}*`}
                    caretHidden={true}
                    onFocus={navigateToZipCode}
                    careHidden={true}
                    rightComponent={() => (
                      <View style={styles.emptyComponent} />
                    )}
                  />

                  <CustomTextInput
                    value={bio}
                    maxLength={250}
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
                  <View style={styles.sportsList}>
                    {Object.values(sports).length === 0 && (
                      <Text
                        onPress={navigateToSports}
                        style={styles.sportsListText}>
                        {LABEL.SPORTS_WATCH}
                      </Text>
                    )}
                    {Object.keys(sports)?.map((keyItem: string) => {
                      return (
                        <View style={styles.tile}>
                          <Text style={styles.tileText}>{sports[keyItem]}</Text>

                          <TouchableImage
                            source={LOCAL_IMAGES.CROSS}
                            style={{
                              height: 14,
                              width: 14,
                              resizeMode: 'contain',
                              marginLeft: 10,
                            }}
                            onPress={() => {
                              let copyObj = JSON.parse(JSON.stringify(sports));
                              delete copyObj[keyItem];
                              setSports(copyObj);
                            }}
                          />
                        </View>
                      );
                    })}
                    {Object.keys(sports).length > 0 && (
                      <React.Fragment>
                        <Text onPress={navigateToSports} style={styles.addMore}>
                          {LABEL.ADD_MORE}
                        </Text>
                        <Text style={styles.fixedLabel}>
                          {LABEL.SPORTS_WATCH}
                        </Text>
                      </React.Fragment>
                    )}
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
      {identityModal && (
        <SelectIdentity identity={identity} modalCallback={modalCallback} />
      )}
    </SafeAreaView>
  );
};

export default CompleteProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    paddingVertical: 6,
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
    marginVertical: 10,
    paddingVertical: 16,
  },
  sportsListText: {
    color: COLORS.WHITE,
    fontSize: 16,
    backgroundColor: COLORS.BLACK,
    fontWeight: '600',
    width: width * 0.79,
  },
  addMore: {
    color: COLORS.BLUE,
    fontSize: 14,
    fontStyle: 'italic',
    fontWeight: '900',
    alignSelf: 'center',
  },
  fixedLabel: {
    color: COLORS.WHITE,
    fontSize: 12,
    position: 'absolute',
    backgroundColor: COLORS.BLACK,
    paddingHorizontal: 6,
    paddingVertical: 4,
    top: -12,
    left: 10,
  },
});
