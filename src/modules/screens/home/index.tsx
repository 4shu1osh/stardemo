import React, {useState} from 'react';
//@ts-ignore
import Video from 'react-native-video';
import VIDEOS from '../../../utils/videos';
import COLORS from '../../../utils/colors';
import {vh, vw} from '../../../utils/dimensions';
import ROUTE_NAMES from '../../../routes/routeNames';
import LOCAL_IMAGES from '../../../utils/localImages';
import Orientation from 'react-native-orientation-locker';
import SwiperFlatList from 'react-native-swiper-flatlist';
import TouchableImage from '../../../components/touchableImage';
import {useNavigation, useIsFocused} from '@react-navigation/native';
import LinearGradientComponent from '../../../components/linearGradient';
import {View, Image, StyleSheet, Dimensions, SafeAreaView, FlatList} from 'react-native';

const {width} = Dimensions.get('window');

export default function Home() {
  const isFocused = useIsFocused();
  let listRef = React.useRef<FlatList>(null);

  React.useEffect(() => {
    isFocused && 
      Orientation.lockToPortrait() 
      listRef?.current?.scrollToIndex({index: currIndex})
  }, [isFocused]);


  const [h, setH] = useState(0);
  const [pause, setPause] = useState(false);
  const [currIndex, setCurrIndex] = useState(0);

  React.useEffect(() => setPause(pause),[])

  let playerRef: any = React.useRef(null);

  const navigation = useNavigation<any>();

  const reelCallBack = (val: boolean) => {
    Orientation.lockToPortrait();
    setCurrIndex(currIndex);
    listRef?.current?.scrollToIndex({index: currIndex});
  }

  const onChangeIndex = ({index}: any) => {
    setCurrIndex(index);
  };

  const onLayout = (event: any) => {
    var {height} = event.nativeEvent.layout;
    isFocused && setH(height);
  };

  const _keyExtractor = (item: any, index: number) => index.toString();

  const _getItemLayout = (_: any, index: number) => ({
    length: h,
    offset: h * index,
    index,
  });

  const onPressFullScreeen = (item: any) => {
    Orientation.lockToLandscape();
    navigation.navigate(ROUTE_NAMES.FULL_SCREEN_VIDEO, {video: item, callbackFn: reelCallBack});
  };

  const renderItem = ({item, index}: any) => {
    return (
      <View style={[styles.renderView, {height: h, width: width}]}>
        <Image source={LOCAL_IMAGES.MAIN_LOGO} style={styles.logo} />
        <Video
          repeat={true}
          ref={playerRef}
          autoPlay={true}
          controls={false}
          startOnLoad={true}
          source={{uri: item}}
          style={styles.video}
          resizeMode={'contain'}
          toggleResizeModeOnFullscreen={false}
          paused={currIndex == index && isFocused ? pause : !pause}
        />

        <View style={styles.buttonContainer}>
          <TouchableImage
            source={LOCAL_IMAGES.FULLSCREEN}
            style={styles.button1}
            s
            onPress={() => onPressFullScreeen(item)}
          />
          <TouchableImage source={LOCAL_IMAGES.SHARE} style={styles.button} />
          <TouchableImage source={LOCAL_IMAGES.SAVE} style={styles.button} />
          <TouchableImage source={LOCAL_IMAGES.RATE} style={styles.button} />
        </View>
        <LinearGradientComponent img={LOCAL_IMAGES.ACCOUNT} />
      </View>
    );
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View onLayout={onLayout} style={styles.container}>
        <SwiperFlatList
          ref={listRef}
          data={VIDEOS}
          windowSize={1}
          horizontal={false}
          pagingEnabled={true}
          initialNumToRender={1}
          initialScrollIndex={0}
          renderItem={renderItem}
          scrollEventThrottle={h}
          maxToRenderPerBatch={2}
          removeClippedSubviews={true}
          keyExtractor={_keyExtractor}
          onChangeIndex={onChangeIndex}
          getItemLayout={_getItemLayout}
          updateCellsBatchingPeriod={10}
          showsVerticalScrollIndicator={false}
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
    right: vw(10),
    width: vw(50),
    height: vh(300),
    position: 'absolute',
    alignItems: 'center',
    alignSelf: 'flex-end',
    justifyContent: 'space-between',
  },
  button: {
    width: vw(70),
    height: vh(70),
    resizeMode: 'contain',
  },
  button1: {
    left: vw(-20),
    width: vw(40),
    height: vh(40),
    bottom: vh(50),
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
  renderView: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  video: {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: '100%',
    height: '100%',
  },
});
