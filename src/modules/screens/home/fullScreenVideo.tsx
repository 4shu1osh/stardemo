import React, {useState} from 'react';
//@ts-ignore
import Video from 'react-native-video';
import COLORS from '../../../utils/colors';
import {vh, vw} from '../../../utils/dimensions';
import LOCAL_IMAGES from '../../../utils/localImages';
import {useIsFocused, useNavigation} from '@react-navigation/native';
import Orientation from 'react-native-orientation-locker';
import TouchableImage from '../../../components/touchableImage';
import {View, StyleSheet, Dimensions, Image} from 'react-native';


const {height, width} = Dimensions.get('window');

export default function FullScreeVideo({route}: any) {
  const [play, setPlay] = useState(true);

  const {callbackFn, index} = route.params;

  React.useEffect(() => {
    Orientation.lockToLandscape();
  }, []);

  const navigation = useNavigation<any>();
  const isFocused = useIsFocused()
  let playerRef: any = React.useRef(null);

  return (
    <View style={styles.container}>
      <Image source={LOCAL_IMAGES.MAIN_LOGO} style={styles.logo} />
      <Video
        source={{
          uri: route.params.video,
        }}
        style={styles.video}
        controls={false}
        ref={(ref: any) => {
          playerRef = ref;
        }}
        startOnLoad={true}
        paused={isFocused ? false : true}
        oggleResizeModeOnFullscreen={false}
        repeat={true}
        resizeMode={'contain'}
      />

      <View style={styles.backButtonContainer}>
        <TouchableImage
          source={LOCAL_IMAGES.BACK_BUTTON}
          style={styles.backButton}
          onPress={() => {
            Orientation.lockToPortrait();
            callbackFn(index);
            setPlay(false);
            navigation.goBack();
          }}
        />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableImage source={LOCAL_IMAGES.SHARE} style={styles.button} />
        <TouchableImage source={LOCAL_IMAGES.SAVE} style={styles.button} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.DARK_GREY,
  },
  buttonContainer: {
    top: vh(80),
    right: vw(-60),
    height: vh(200),
    position: 'absolute',
    alignSelf: 'flex-end',
    justifyContent: 'space-between',
  },
  button: {
    right: vw(100),
    width: vw(70),
    height: vh(70),
    resizeMode: 'contain',
  },
  button1: {
    left: vw(-20),
    width: vw(40),
    bottom: vh(40),
    height: vh(40),
    position: 'absolute',
    resizeMode: 'contain',
  },
  logo: {
    top: vh(40),
    width: vw(100),
    height: vh(100),
    alignSelf: 'center',
    position: 'absolute',
    resizeMode: 'contain',
  },
  backButton: {
    width: vw(20),
    height: vh(20),
    resizeMode: 'contain',
  },
  backButtonContainer: {
    top: vh(30),
    left: vw(30),
    position: 'absolute',
    alignSelf: 'flex-start',
  },
  video: {
    width: '100%',
    height: '100%',
  },
});
