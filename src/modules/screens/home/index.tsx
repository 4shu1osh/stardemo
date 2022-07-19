import React, {useState} from 'react';
//@ts-ignore
import Video from 'react-native-video';
import { contentAction } from './action';
import COLORS from '../../../utils/colors';
import STRINGS from '../../../utils/strings';
import {vh, vw} from '../../../utils/dimensions';
import ROUTE_NAMES from '../../../routes/routeNames';
import LOCAL_IMAGES from '../../../utils/localImages';
import { useDispatch, useSelector } from 'react-redux';
import Orientation from 'react-native-orientation-locker';
import SwiperFlatList from 'react-native-swiper-flatlist';
import TouchableImage from '../../../components/touchableImage';
import {useNavigation, useIsFocused} from '@react-navigation/native';
import LinearGradientComponent from '../../../components/linearGradient';
import {Text, View, Image, StyleSheet, Dimensions, SafeAreaView} from 'react-native';


const {LABEL} = STRINGS;
const {width} = Dimensions.get('window');

export default function Home() {
  const isFocused = useIsFocused();
  let listRef = React.useRef<any>(null);
  const {authToken} = useSelector((store: any) => store.verificationReducer);
  console.log("auth = ", authToken);
  const dispatch = useDispatch<any>();

  React.useEffect(() => {
    dispatch(contentAction(authToken, contentCallBack))
    isFocused && 
      Orientation.lockToPortrait() 
  }, [isFocused]);

  const [h, setH] = useState(0);
  const [pause, setPause] = useState(false);
  const [content, setContent] = useState([]);
  const [currIndex, setCurrIndex] = useState(0);

  React.useEffect(() => setPause(pause),[])

  let playerRef: any = React.useRef(null);

  const navigation = useNavigation<any>();

  const reelCallBack = (index: number) => {
   setTimeout(()=>{
    listRef?.current?.scrollToIndex({index: index});
   }, 500)
  }

  const contentCallBack = (list: any) => {
    setContent(list);
  }

  const onChangeIndex = ({index}: any) => {
    setCurrIndex(index);
    console.log(currIndex);
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

  const onPressFullScreeen = (item: any, index: number) => {
    Orientation.lockToLandscape();
    navigation.navigate(ROUTE_NAMES.FULL_SCREEN_VIDEO, {video: item.contentUrl, callbackFn: reelCallBack, index});
  };

  const renderItem = ({item, index}: any) => {
    const {profileImage, name} = item?.userData
    return (
      <View style={[styles.renderView, {height: h, width: width}]}>
        <Image source={LOCAL_IMAGES.MAIN_LOGO} style={styles.logo} />
        <Video
          repeat={true}
          ref={playerRef}
          autoPlay={true}
          controls={false}
          startOnLoad={true}
          style={styles.video}
          resizeMode={'contain'}
          source={{uri: item.contentUrl}}
          toggleResizeModeOnFullscreen={false}
          paused={isFocused ? (currIndex == index ? false : true) : true}
        />

        <View style={styles.buttonContainer}>
          <TouchableImage
            source={LOCAL_IMAGES.FULLSCREEN}
            style={styles.button1}
            s
            onPress={() => onPressFullScreeen(item, index)}
          />
          <TouchableImage source={LOCAL_IMAGES.SHARE} style={styles.button} />
          <TouchableImage source={LOCAL_IMAGES.SAVE} style={styles.button} />
          <TouchableImage source={LOCAL_IMAGES.RATE} style={styles.button} />
        </View>
        <View style={styles.footer}>
        <LinearGradientComponent img={profileImage} />
        <Text style={[styles.text, styles.nameStyle]} >{name}</Text>
        <Text style={styles.text} >{"•"}</Text>
        <Text style={styles.text} >{LABEL.FOLLOW}</Text>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View onLayout={onLayout} style={styles.container}>
        <SwiperFlatList
          ref={listRef}
          data={content}
          windowSize={1}
          vertical={true}
          pagingEnabled={true}
          initialNumToRender={0}
          renderItem={renderItem}
          scrollEventThrottle={h}
          maxToRenderPerBatch={1}
          decelerationRate={'normal'}
          removeClippedSubviews={true}
          keyExtractor={_keyExtractor}
          onChangeIndex={onChangeIndex}
          updateCellsBatchingPeriod={1}
          getItemLayout={_getItemLayout}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.DARK_GREY,
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
  footer: {
    left: -30,
    height: 60,
    width: 300,
    marginBottom: 60,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  nameStyle: {
    fontWeight: '900',
  },
  text: {
    marginLeft: 10,
    color: COLORS.WHITE,
  }
});
