import {ImageBackground, StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {Modal} from 'react-native-paper';
import CustomButton from '../customButton';
import COLORS from '../../utils/colors';
import LOCAL_IMAGES from '../../utils/localImages';
import styles from './style'

const CustomModal = (props: any) => {
  const {visibleValue, buttonLabel} = props;
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
          <CustomButton
            label={buttonLabel}
            style={styles.button}
            labelStyle={styles.label}
            backgroundColor={COLORS.BLUE}
            onPress={hideModal}
          />
        </View>
      </ImageBackground>
    </Modal>
  );
};

export default CustomModal;

