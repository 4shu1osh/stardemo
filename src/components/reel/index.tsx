import {View, Text, Image, StyleSheet, Dimensions} from 'react-native';
import React, { useState} from 'react';
import TouchableImage from '../touchableImage';
import Video from 'react-native-video';
import LOCAL_IMAGES from '../../utils/localImages';
import Orientation from 'react-native-orientation-locker';
import LinearGradientComponent from '../linearGradient';
import {useIsFocused, useNavigation} from '@react-navigation/native';
import ROUTE_NAMES from '../../routes/routeNames';
import {vh, vw} from '../../utils/dimensions';


const {width} = Dimensions.get('window');

interface Props {
    item: any,
  index: number,
  height: number,
  width: number,
  play: boolean,
  setPlay: any,
  page: number,
}

function ReelComponent(
 {...props}: Props) 
 {
  const {item, index, height, width, play, setPlay, page} = props;
  let playerRef: any = React.useRef(null);
  const isFocused = useIsFocused();
  const navigation = useNavigation<any>();
  console.log('rendered');
  return (
    <View style={[styles.renderView, {height: height, width: width}]}>
      <Image source={LOCAL_IMAGES.MAIN_LOGO} style={styles.logo} />
      <Video
        autoPlay={true}
        source={{
          uri: item,
        }}
        style={styles.video}
        controls={false}
        ref={(ref: any) => {
          playerRef = ref;
        }}
        startOnLoad={true}
        oggleResizeModeOnFullscreen={false}
        repeat={true}
        paused={page == index + 1 ? !play : play}
        resizeMode={'contain'}
      />

      <View style={styles.buttonContainer}>
        <TouchableImage
          source={LOCAL_IMAGES.FULLSCREEN}
          style={styles.button1}
          s
          onPress={() => {
            setPlay(!play);
            Orientation.lockToPortrait();
            navigation.navigate(ROUTE_NAMES.FULL_SCREEN_VIDEO, {video: item});
          }}
        />
        <TouchableImage source={LOCAL_IMAGES.SHARE} style={styles.button} />
        <TouchableImage source={LOCAL_IMAGES.SAVE} style={styles.button} />
        <TouchableImage source={LOCAL_IMAGES.RATE} style={styles.button} />
      </View>
      <LinearGradientComponent img={LOCAL_IMAGES.ACCOUNT} />
    </View>
  );
}

export default React.memo(ReelComponent,(preProps:any,nextProp:any)=>{
    return preProps.page !== nextProp.page
});

const styles = StyleSheet.create({
  buttonContainer: {
    position: 'absolute',
    height: vh(300),
    width: vw(50),
    alignItems: 'center',
    alignSelf: 'flex-end',
    right: vw(10),
    justifyContent: 'space-between',
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
    bottom: vh(50),
    left: vw(-20),
  },
  video: {width: '100%', height: '100%'},
  logo: {
    height: vh(100),
    width: vw(100),
    resizeMode: 'contain',
    position: 'absolute',
    top: vh(40),
    alignSelf: 'center',
  },
  renderView: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

