import React, {useState} from 'react';
import Video from 'react-native-video';
import {vh, vw} from '../../../utils/dimensions';
import LOCAL_IMAGES from '../../../utils/localImages';
import {useNavigation} from '@react-navigation/native';
import Orientation from 'react-native-orientation-locker';
import TouchableImage from '../../../components/touchableImage';
import {View, StyleSheet, Dimensions, Image} from 'react-native';

const {height, width} = Dimensions.get('window');

export default function FullScreeVideo({route}: any) {
  const [play, setPlay] = useState(true);

  const  {callbackFn} = route.params;

  React.useEffect(() => {
    Orientation.lockToLandscape();
    setPlay(play)
  }, []);

  const navigation = useNavigation<any>();

  React.useEffect(() => {
    Orientation.lockToLandscape();
  }, [navigation]);



  let playerRef: any = React.useRef(null);
  

  return (
    <View
      style={{
        height: vh(height),
        width: vw(width),
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black',
      }}>
      <Image source={LOCAL_IMAGES.MAIN_LOGO} style={styles.logo} />
        <Video
        source={{
          uri: route.params.video,
        }}
        style={{width: '100%', height: '100%'}}
        controls={false}
        ref={(ref: any) => {
          playerRef = ref;
        }}
        startOnLoad={true}
        paused={!play}
        oggleResizeModeOnFullscreen={false}
        repeat={true}
        resizeMode={'contain'}
      />

      <View style={styles.backButtonContainer}>
        <TouchableImage
          source={LOCAL_IMAGES.BACK_BUTTON}
          style={styles.backButton}
          onPress={() => {
              callbackFn(true)
              setPlay(false);
              Orientation.lockToPortrait();
              setTimeout(() => {
                navigation.goBack();
              }, 1000);
              
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
    width: vw(70),
    height: vh(70),
    resizeMode: 'contain',
    right: 120
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
});
