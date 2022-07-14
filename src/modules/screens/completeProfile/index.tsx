import {
  View,
  Text,
  Image,
  Platform,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import styles from './style';
import {Formik} from 'formik';
import FONTS from '../../../utils/fonts';
import COLORS from '../../../utils/colors';
import STRINGS from '../../../utils/strings';
import DatePicker from 'react-native-date-picker';
import {useDispatch, useSelector} from 'react-redux';
import ROUTE_NAMES from '../../../routes/routeNames';
import LOCAL_IMAGES from '../../../utils/localImages';
import {useNavigation} from '@react-navigation/native';
import getFirstName from '../../../utils/getFirstName';
import CustomTextInput from '../../../components/textInput';
import {SafeAreaView} from 'react-native-safe-area-context';
import imagePickerFunction from '../../../utils/imagePicker';
import validatioSchema from '../../../utils/validationSchema';
import {EnabledButton} from '../../../components/customButton';
import TouchableImage from '../../../components/touchableImage';
import {checkUserNameAction, recommendationAction} from './action';
import SelectIdentity from '../../../components/modal/selectIdentity';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const {COMMON, LABEL} = STRINGS;

const CompleteProfile = ({route}: any) => {
  const {name, authToken, _id, username} = useSelector(
    (store: any) => store.verificationReducer,
  );
  const {selection} = route?.params;

  const dispatch = useDispatch<any>();

  const userInitialInfo = {
    dob: '',
    zipcode: '',  
    bio: '',
    referralCode: '',
  };

  const [zip, setZip] = React.useState('10001');
  const [sports, setSports] = React.useState({});
  const [date, setDate] = React.useState(new Date());
  const [coverImage, setCoverImage] = React.useState('');
  const [datePicker, setDatePicker] = React.useState(false);
  const [identity, setIdentity] = React.useState(selection);
  const [user_name, setUser_name] = React.useState(username);
  const [profileImage, setProfileImage] = React.useState('');
  const [userNameError, setUserNameError] = React.useState('');
  const [identityModal, setIdentityModal] = React.useState(false);
  const [usernameSuggestions, setUsernameSuggestions] = React.useState([]);

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

  const getUsername = (list: any, err: string) => {
    setUsernameSuggestions(list);
    setUserNameError(err);
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

  const onChangeText = (text: string) => {
    setUser_name(text);
    dispatch(checkUserNameAction(authToken, getUsername, text, _id));
  };

  const recommendationCallback = (list: any) => {
    navigation.navigate(ROUTE_NAMES.ATHLETE_RECOMMENDATION, {
      list,
      name,
      authToken,
      _id,
      username,
      zip,
      userType: 1,
    });
  };

  const onPressNext = () => {
    dispatch(recommendationAction(authToken, recommendationCallback));
  };

  const _renderItem = ({item}: any) => {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => {
          setUser_name(item);
          setUsernameSuggestions([]);
        }}>
        <Text style={styles.usernameSuggestionText}>{item}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.BLACK}}>
      <View style={styles.headerView}>
        <Text style={styles.heading}>{`Hi ${getFirstName(name)}!`}</Text>
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
              const {dob, zipcode, bio, referralCode} = values;
              return (
                <React.Fragment>
                  <CustomTextInput
                    value={user_name}
                    label={`${LABEL.CHANGE_USERNAME}*`}
                    onBlur={() => onChangeText(user_name)}
                    onChangeText={(text: string) => setUser_name(text)}
                    rightComponent={() => (
                      <Image
                        source={
                          user_name ? LOCAL_IMAGES.CHECK : LOCAL_IMAGES.PENCIL
                        }
                        style={styles.icon}
                      />
                    )}
                  />

                  {usernameSuggestions.length > 0 && (
                    <React.Fragment>
                      <Text style={styles.errText}>{userNameError}</Text>
                      <View style={styles.usernameSuggestionView}>
                        <Text style={styles.usernameSuggestionText}>
                          {'Suggestions: '}
                        </Text>
                        <FlatList
                          horizontal={true}
                          data={usernameSuggestions}
                          renderItem={_renderItem}
                          keyExtractor={(_, index) => index.toString()}
                          ItemSeparatorComponent={() => (
                            <Text style={styles.usernameSuggestionText}>
                              {',  '}
                            </Text>
                          )}
                        />
                      </View>
                    </React.Fragment>
                  )}

                  <TouchableOpacity
                    style={styles.identityView}
                    activeOpacity={0.8}
                    onPress={() => openModal()}>
                    <Text
                      style={{
                        color: COLORS.BLUE,
                        fontFamily: FONTS.HELVETICA,
                        fontSize: 15,
                      }}>
                      {identity ? identity : LABEL.SELECT_IDENTITY}
                    </Text>
                    <Image
                      source={LOCAL_IMAGES.RIGHT_ARROW}
                      style={styles.rightArrow}
                    />
                    {identity.length > 0 && (
                      <Text style={styles.fixedLabel}>
                        {LABEL.SELECT_IDENTITY + '*'}
                      </Text>
                    )}
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={styles.identityView}
                    activeOpacity={0.8}
                    onPress={openDatePicker}>
                    <Text
                      style={{
                        color: COLORS.BLUE,
                        fontFamily: FONTS.HELVETICA,
                        fontSize: 15,
                      }}>
                      {date.toLocaleDateString()
                        ? date.toLocaleDateString()
                        : LABEL.DOB}
                    </Text>
                    <Image
                      source={LOCAL_IMAGES.CALENDAR}
                      style={styles.rightArrow}
                    />
                    {date.toLocaleDateString().length > 0 && (
                      <Text style={styles.fixedLabel}>{LABEL.DOB + '*'}</Text>
                    )}
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={styles.identityView}
                    activeOpacity={0.8}
                    onPress={navigateToZipCode}>
                    <Text
                      style={{
                        color: COLORS.BLUE,
                        fontFamily: FONTS.HELVETICA,
                        fontSize: 15,
                      }}>
                      {zip ? zip : LABEL.ZIPCODE}
                    </Text>
                    {zip.length > 0 && (
                      <Text style={styles.fixedLabel}>
                        {LABEL.ZIPCODE + '*'}
                      </Text>
                    )}
                  </TouchableOpacity>

                  <CustomTextInput
                    value={bio}
                    maxLength={250}
                    multiline={true}
                    style={[styles.input]}
                    label={LABEL.BIO}
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
                    label={LABEL.REFERAL_CODE}
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
                          <Text style={styles.tileText}>
                            {
                              //@ts-ignore
                              sports[keyItem]
                            }
                          </Text>
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
                  <EnabledButton
                    label={LABEL.NEXT.toUpperCase()}
                    onPress={onPressNext}
                  />
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
