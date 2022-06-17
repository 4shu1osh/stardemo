import {ImageBackground, StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {Modal} from 'react-native-paper';
import LOCAL_IMAGES from '../../utils/localImages';
import styles from './style'
import { EnabledButton } from '../customButton';

const CustomModal = (props: any) => {
  const {visibleValue, buttonLabel} = props;
  const [visible, setVisible] = React.useState(visibleValue);

  const hideModal = () => setVisible(false);
  console.log("caem ---here")
  return (
    <Modal
      visible={visible}
      onDismiss={hideModal}
      contentContainerStyle={styles.modalStyle}>
      <ImageBackground
        source={LOCAL_IMAGES.MODAL_RECTANGLE}
        style={styles.rectangle}>
        <Image
          source={LOCAL_IMAGES.LIKE}
          style={styles.icon}
        />
        <Text style={[styles.text, {fontSize: 18, fontWeight: '900'}]}>
          {'Congratulations'}
        </Text>
        <Text style={styles.text}>
          {'Your account has been successfully\nregistered'}
        </Text>
        <View style={styles.buttonView}>
          <EnabledButton
            label={buttonLabel.toUpperCase()}
            onPress={hideModal}
          />
        </View>
      </ImageBackground>
    </Modal>
  );
};

export default CustomModal;

