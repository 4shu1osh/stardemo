import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Dimensions,
  Image,
  TouchableOpacity,
  ImageBackground,
  Animated,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import Video from 'react-native-video';
import VIDEOS from '../../../utils/videos';
import COLORS from '../../../utils/colors';
import {vh, vw} from '../../../utils/dimensions';
import LOCAL_IMAGES from '../../../utils/localImages';
import TouchableImage from '../../../components/touchableImage';
import VideoPlayer from 'react-native-video-controls';
import Orientation from 'react-native-orientation-locker';
import ROUTE_NAMES from '../../../routes/routeNames';

const {width, height} = Dimensions.get('window');

export default function FullScreeVideo({route}: any) {
  const [play, setPlay] = useState(true);
  var [page, setPage] = useState(1);
  let playerRef: any = React.useRef(null);

    const navigation = useNavigation<any>();

  //lock orientation to landscape in useEffect
  React.useEffect(() => {
    Orientation.lockToLandscape();
  }, []);

  //pause video when navigating away from screen
    React.useEffect(() => {
        navigation.addListener('blur', () => {
            setPlay(false);
        }
        );
    }, [navigation]);

  console.log('video======', route.params.video);

  return (
    <View
    //   source={require('../../../assets/images/bg.jpeg')}
      style={{
        height: vw(width),
        width: vh(736),
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Image source={LOCAL_IMAGES.MAIN_LOGO} style={styles.logo} />
      <Video
        source={{
          uri: route.params.video,
        }}
        style={{width: '150%', height: '100%'}}
        controls={false}
        ref={(ref: any) => {
          playerRef = ref;
        }}
        startOnLoad={true}
        paused={!play}
        oggleResizeModeOnFullscreen={false}
        repeat={true}
        resizeMode={'cover'}
      />

      <View style={styles.backButtonContainer}>
        <TouchableImage
          source={LOCAL_IMAGES.BACK_BUTTON}
          style={styles.backButton}
          onPress={() => {
            setTimeout(() => {
            setPlay(false);
            Orientation.lockToPortrait();
            navigation.navigate(ROUTE_NAMES.HOME);
            }, 0);
            }
            }
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
    position: 'absolute',
    height: vh(200),
    alignSelf: 'flex-end',
    justifyContent: 'space-between',
    top: vh(80),
    right: vw(-60)
  },
  button: {
    height: vh(70),
    width: vw(70),
    resizeMode: 'contain',
  },
  button1: {
    height: vh(40),
    width: vw(40),
    resizeMode: 'contain',
    position: 'absolute',
    bottom: vh(40),
    left: vw(-20),
  },
  logo: {
    height: vh(100),
    width: vw(100),
    resizeMode: 'contain',
    position: 'absolute',
    top: vh(40),
    alignSelf: 'center',
  },
  backButton: {
    height: vh(20),
    width: vw(20),
    resizeMode: 'contain',
    shadowColor: COLORS.BLACK,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.5,
  },
  backButtonContainer: {
    position: 'absolute',
    top: vh(30),
    left: vw(30),
    alignSelf: 'flex-start',
  },
});
