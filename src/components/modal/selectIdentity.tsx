import {
  StyleSheet,
  Modal,
  View,
  Image,
  Text,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import LOCAL_IMAGES from '../../utils/localImages';
import STRINGS from '../../utils/strings';
import COLORS from '../../utils/colors';
import TouchableImage from '../touchableImage';

const {LABEL} = STRINGS;

const SelectIdentity = ({modalCallback, identity}: any) => {
  console.log('modal');
  const [visible, setVisible] = React.useState(true);
  const [selection, setSelection] = React.useState(identity);
  
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={() => {
        setVisible(!visible);
      }}>
      <View style={styles.container}>
        <TouchableImage
          source={LOCAL_IMAGES.CLOSE_BUTTON}
          style={styles.closeButton}
          onPress={() => modalCallback(selection)}
        />
        <Text style={styles.heading}>{LABEL.SELECT_IDENTITY}</Text>
        <TouchableOpacity
          activeOpacity={0.9}
          style={
            selection == LABEL.FAN ? styles.selectedBanner : styles.bannerView
          }
          onPress={() => {setSelection(LABEL.FAN) }}>
          <Image source={LOCAL_IMAGES.FAN_BANNER} style={styles.banner} />
          {selection == LABEL.FAN && (
            <Image source={LOCAL_IMAGES.CHECK} style={styles.icon} />
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
            <Image source={LOCAL_IMAGES.CHECK} style={styles.icon} />
          )}
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

export default SelectIdentity;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.BLACK,
    padding: 20,
    alignItems: 'flex-end',
    bottom: 0,
    position: 'absolute',
    borderTopWidth: 2,
    borderTopColor: COLORS.BLUE,
  },

  heading: {
    color: COLORS.WHITE,
    fontSize: 24,
    fontWeight: '900',
    fontStyle: 'italic',
    marginBottom: 20,
    letterSpacing: 1,
    alignSelf: 'flex-start',
  },
  banner: {
    height: 106,
    width: 329,
    resizeMode: 'contain',
    marginBottom: 60,
  },
  bannerView: {
    height: 106,
    width: 329,
    marginBottom: 40,
    alignItems: 'center',
  },
  selectedBanner: {
    height: 112,
    paddingHorizontal: 2,
    borderColor: COLORS.BLUE,
    borderRadius: 10,
    paddingVertical: 2,
    marginBottom: 30,
    alignItems: 'center',
    borderWidth: 1,
  },
  icon: {
    height: 20,
    width: 20,
    position: 'absolute',
    resizeMode: 'contain',
    bottom: 80,
    right: 12,
  },
  bannerText: {
    color: COLORS.WHITE,
    fontSize: 26,
    fontWeight: '900',
    fontStyle: 'italic',
    position: 'absolute',
    top: 40,
    right: 90,
  },
  closeButton: {
    height: 20,
    width: 20,
    resizeMode: 'contain',
    marginBottom: 20,
  },
});
