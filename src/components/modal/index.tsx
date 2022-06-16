import {ImageBackground, StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {Modal} from 'react-native-paper';
import CustomButton from '../customButton';
import COLORS from '../../utils/colors'
import LOCAL_IMAGES from '../../utils/localImages';

const CustomModal = (props) => {
  const {visibleValue, buttonLabel} = props;
  const [visible, setVisible] = React.useState(visibleValue);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  return (
    <Modal
      visible={visible}
      onDismiss={hideModal}
      contentContainerStyle={styles.modalStyle}>
      <ImageBackground
        source={LOCAL_IMAGES.MODAL_RECTANGLE}
        style={{height: 244, width: 328}}>
          <Image 
          source={LOCAL_IMAGES.LIKE}
          style={{height: 30, width: 30, marginTop: 20}}
          />
        <Text style={[styles.text, {fontSize: 18, fontWeight: '900'}]}>{"Congratulations"}</Text>
        <Text style={styles.text}>{"Your account has been successfully\nregistered"}</Text>
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

const styles = StyleSheet.create({
  buttonView: {
    flexDirection: 'row',
    justifyContent: 'center',

  },
  button: {
    height: 50,
    width: 300,
    borderRadius: 6,
    marginTop: 26,
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    fontSize: 18,
    fontStyle: 'italic',
    fontWeight: '900',
    color: '#000',
  },
  modalStyle: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: COLORS.WHITE,
    textAlign: 'center',
    fontSize: 14,
    marginVertical: 7
  }
})
