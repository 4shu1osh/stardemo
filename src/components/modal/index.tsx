import React from 'react';
import styles from './style';
import {Modal} from 'react-native-paper';
import STRINGS from '../../utils/strings';
import {EnabledButton} from '../customButton';
import LOCAL_IMAGES from '../../utils/localImages';
import {ImageBackground, Text, View, Image} from 'react-native';

const CustomModal = (props: any) => {
  const {visibleValue, buttonLabel, callbackFn} = props;

  const [visible, setVisible] = React.useState(visibleValue);

  const hideModal = () => setVisible(false);

  return (
    <Modal
      visible={visible}
      onDismiss={hideModal}
      contentContainerStyle={styles.modalStyle}>
      <ImageBackground
        source={LOCAL_IMAGES.MODAL_RECTANGLE}
        style={styles.rectangle}>
        <Image source={LOCAL_IMAGES.LIKE} style={styles.icon} />
        <Text style={[styles.text, {fontSize: 18, fontWeight: '900'}]}>
          {STRINGS.COMMON.CONGRATULATIONS}
        </Text>
        <Text style={styles.text}>{STRINGS.COMMON.YOU_ARE_REGISTERED}</Text>
        <View style={styles.buttonView}>
          <EnabledButton
            label={buttonLabel.toUpperCase()}
            onPress={callbackFn}
          />
        </View>
      </ImageBackground>
    </Modal>
  );
};

export default CustomModal;
