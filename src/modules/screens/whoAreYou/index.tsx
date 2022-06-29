import {
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
  Text,
  Alert,
} from 'react-native';
import React from 'react';
import COLORS from '../../../utils/colors';
import ROUTE_NAMES from '../../../routes/routeNames';
import LOCAL_IMAGES from '../../../utils/localImages';
import {useNavigation} from '@react-navigation/native';
import styles from './style';
import STRINGS from '../../../utils/strings';
import TouchableImage from '../../../components/touchableImage';
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
          style={selection == 'FAN' ? styles.selectedBanner : styles.bannerView}
          onPress={() => setSelection('FAN')}>
          <Image source={LOCAL_IMAGES.FAN_BANNER} style={styles.banner} />
          {selection == 'FAN' && (
            <Image source={LOCAL_IMAGES.CHECK} style={styles.check} />
          )}
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.9}
          style={
            selection == 'ATHLETE' ? styles.selectedBanner : styles.bannerView
          }
          onPress={() => setSelection('ATHLETE')}>
          <Image source={LOCAL_IMAGES.ATHLETE_BANNER} style={styles.banner} />
          {selection == 'ATHLETE' && (
            <Image source={LOCAL_IMAGES.CHECK} style={styles.check} />
          )}
        </TouchableOpacity>
      </View>
      <View style={{alignSelf: 'center'}}>
        {selection ? (
          <EnabledButton
            label={LABEL.NEXT.toUpperCase()}
            onPress={() => navigation.navigate(ROUTE_NAMES.COMPLETE_PROFILE, {selection})}
          />
        ) : (
          <DisabledButton label={LABEL.NEXT.toUpperCase()} />
        )}
      </View>
    </SafeAreaView>
  );
}
