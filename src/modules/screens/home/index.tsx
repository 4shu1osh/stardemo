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
  SafeAreaView,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {
  useNavigation,
  useFocusEffect,
  useIsFocused,
} from '@react-navigation/native';
import Video from 'react-native-video';
import VIDEOS from '../../../utils/videos';
import COLORS from '../../../utils/colors';
import {vh, vw} from '../../../utils/dimensions';
import LOCAL_IMAGES from '../../../utils/localImages';
import TouchableImage from '../../../components/touchableImage';
import Orientation from 'react-native-orientation-locker';
import ROUTE_NAMES from '../../../routes/routeNames';

const {width} = Dimensions.get('window');

export default function Home() {
  const [play, setPlay] = useState(true);
  const [page, setPage] = useState(1);
  const [height, setHeight] = useState(0);
  let playerRef: any = React.useRef(null);
  const isFocused = useIsFocused();

  const navigation = useNavigation<any>();

  React.useEffect(() => {
    navigation.addListener('focus', () => {
      setPlay(true);
    });
  }, [navigation]);

  const onLayout = (event: any) => {
    var {height} = event.nativeEvent.layout;
    isFocused && setHeight(height);
  };

  const renderItem = ({item, index}: any) => {
    return (
      <View
        style={[styles.renderView, {height: height, width: width,}]}>
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
      </View>
    );
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View onLayout={onLayout} style={styles.container}>
        <Animated.FlatList
          data={VIDEOS}
          renderItem={renderItem}
          pagingEnabled={true}
          showsVerticalScrollIndicator={false}
          scrollEventThrottle={height}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
       </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.BLUE,
  },
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
    video: {width: '100%', height: '100%'}
});
