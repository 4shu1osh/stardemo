import React from 'react';
import styles from './style';
import COLORS from '../../../utils/colors';
import STRINGS from '../../../utils/strings';
import ROUTE_NAMES from '../../../routes/routeNames';
import LOCAL_IMAGES from '../../../utils/localImages';
import {useNavigation} from '@react-navigation/native';
import {View, SafeAreaView, TouchableOpacity, Image, Text} from 'react-native';
import {DisabledButton, EnabledButton} from '../../../components/customButton';

const {COMMON, LABEL} = STRINGS;

export default function WhoAreYou() {
  const navigation = useNavigation<any>();

  const [selection, setSelection] = React.useState('');

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.BLACK}}>
      <View style={styles.headerView}>
        <TouchableOpacity
          onPress={() => navigation.navigate(ROUTE_NAMES.SIGN_UP_SCREEN)}>
          <Image source={LOCAL_IMAGES.BACK_BUTTON} style={styles.backButton} />
        </TouchableOpacity>
        <Text style={styles.heading}>{COMMON.WHO_ARE_YOU_HEADING}</Text>
      </View>
      <View style={styles.container}>
        <TouchableOpacity
          activeOpacity={0.9}
          style={
            selection == LABEL.FAN ? styles.selectedBanner : styles.bannerView
          }
          onPress={() => setSelection(LABEL.FAN)}>
          <Image source={LOCAL_IMAGES.FAN_BANNER} style={styles.banner} />
          {selection == LABEL.FAN && (
            <Image source={LOCAL_IMAGES.CHECK} style={styles.check} />
          )}
          <Text style={styles.bannerText}>{LABEL.FAN.toUpperCase()}</Text>
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.9}
          style={
            selection == LABEL.ATHLETE
              ? styles.selectedBanner
              : styles.bannerView
          }
          onPress={() => setSelection(LABEL.ATHLETE)}>
          <Image source={LOCAL_IMAGES.ATHLETE_BANNER} style={styles.banner} />
          {selection == LABEL.ATHLETE && (
            <Image source={LOCAL_IMAGES.CHECK} style={styles.check} />
          )}
        </TouchableOpacity>
      </View>
      <View style={{alignSelf: 'center'}}>
        {selection ? (
          <EnabledButton
            label={LABEL.NEXT.toUpperCase()}
            onPress={() =>
              navigation.navigate(ROUTE_NAMES.COMPLETE_PROFILE, {
              selection,
              })
            }
          />
        ) : (
          <DisabledButton label={LABEL.NEXT.toUpperCase()} />
        )}
      </View>
    </SafeAreaView>
  );
}
