import {View, Text, SafeAreaView, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import COLORS from '../../../utils/colors';
import TouchableImage from '../../../components/touchableImage';
import STRINGS from '../../../utils/strings';
import ROUTE_NAMES from '../../../routes/routeNames';
import LOCAL_IMAGES from '../../../utils/localImages';
import { useNavigation } from '@react-navigation/native';

export default function WhoAreYou() {
    const navigation = useNavigation();
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.BLACK}}>
      <View>
      <TouchableOpacity
          onPress={() => navigation.navigate(ROUTE_NAMES.LOGIN_SCREEN)}>
          <Image source={LOCAL_IMAGES.BACK_BUTTON} style={styles.backButton} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
