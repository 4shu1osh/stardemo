import {
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
  Text,
  StyleSheet,
  FlatList,
} from 'react-native';
import React from 'react';
import {sportsAction} from './action';
import FONTS from '../../../utils/fonts';
import COLORS from '../../../utils/colors';
import STRINGS from '../../../utils/strings';
import {useDispatch, useSelector} from 'react-redux';
import SearchBar from '../../../components/searchBar';
import LOCAL_IMAGES from '../../../utils/localImages';
import {useNavigation} from '@react-navigation/native';
import NoDataComponent from '../../../components/noDataComponent';
import ListEmptyComponent from '../../../components/listEmptyComponent';
import {DisabledButton, EnabledButton} from '../../../components/customButton';

const {COMMON, LABEL} = STRINGS;

export default function SelectSports({route}: any) {

  console.log("rendered")
  const {callbackFn, sports} = route.params;

  const dispatch: any = useDispatch();

  const [data, setData] = React.useState([]);
  const [searchText, setSearchText] = React.useState('');
  const [sportsList, setSportsList] = React.useState([]);
  const [selectedSports, setSelectedSports] = React.useState({...sports});


  const {authToken} = useSelector((store: any) => store.verificationReducer);

  const getSports = (response: any) => {
    setData(response);
    setSportsList(response);
  };

  React.useEffect(() => {}, [selectedSports]);

  React.useEffect(() => {
    dispatch(sportsAction(authToken, getSports));
  }, []);

  const onSearchItem = (text: string) => {
    setSearchText(text);
    setData(
      sportsList.filter((item: any) =>
        item?.sportName.toLowerCase().includes(text.toLowerCase()),
      ),
    );
  };

  const _renderItem = ({item}: any) => {
    console.log(selectedSports.hasOwnProperty(item._id));
    return (
      <TouchableOpacity
        activeOpacity={0.9}
        style={
          selectedSports.hasOwnProperty(item._id)
            ? styles.activeSportsView
            : styles.sportsView
        }
        onPress={() => {
          if (selectedSports.hasOwnProperty(item._id)) {
            setSelectedSports((prevData: any) => {
              delete prevData[item._id];
              setSelectedSports({...prevData});
            });
          } else
            setSelectedSports({...selectedSports, [item._id]: item.sportName});
        }}>
        <Image
          source={{uri: item?.sportImg}}
          style={
            selectedSports.hasOwnProperty(item._id)
              ? styles.activeSportsImage
              : styles.sportsImage
          }
        />
        <Text
          style={
            selectedSports.hasOwnProperty(item._id)
              ? styles.activeSportsText
              : styles.sportsText
          }>
          {item?.sportName}
        </Text>
        {selectedSports.hasOwnProperty(item._id) && (
          <Image source={LOCAL_IMAGES.SELECTED} style={styles.checkIcon} />
        )}
      </TouchableOpacity>
    );
  };

  const navigation = useNavigation<any>();


  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.BLACK}}>
      <View style={styles.container}>
        <View style={styles.headerView}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}>
            <Image
              source={LOCAL_IMAGES.BACK_BUTTON}
              style={styles.backButton}
            />
          </TouchableOpacity>
          <Text style={styles.heading}>{COMMON.SELECT_SPORTS_HEADING}</Text>
        </View>
        <SearchBar onChangeText={onSearchItem} label={COMMON.SEARCH} />

        <FlatList
          contentContainerStyle={{alignItems: 'center'}}
          numColumns={3}
          data={data}
          renderItem={_renderItem}
          ListEmptyComponent={
            sportsList.length > 0
              ? ListEmptyComponent({searchText})
              : NoDataComponent
          }
        />

        <View style={{alignSelf: 'center'}}>
          {Object.keys(selectedSports).length > 0 ? (
            <EnabledButton
              label={LABEL.SUBMIT.toUpperCase()}
              onPress={() => {
                callbackFn(selectedSports);
                navigation.goBack();
              }}
            />
          ) : (
            <DisabledButton label={LABEL.SUBMIT.toUpperCase()} />
          )}
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  backButton: {
    height: 20,
    width: 20,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  container: {
    flex: 1,
    backgroundColor: COLORS.BLACK,
    justifyContent: 'space-between',
  },
  headerView: {
    backgroundColor: COLORS.BLACK,
    paddingHorizontal: 20,
  },
  heading: {
    color: COLORS.WHITE,
    fontSize: 28,
    fontWeight: '900',
    fontStyle: 'italic',
    marginBottom: 10,
    letterSpacing: 1,
  },
  banner: {
    height: 106,
    width: 329,
    resizeMode: 'contain',
    marginBottom: 60,
  },
  bannerView: {
    height: 106,
    width: 329,
    marginBottom: 40,
    alignItems: 'center',
  },
  selectedBanner: {
    height: 112,
    paddingHorizontal: 2,
    borderColor: COLORS.BLUE,
    borderRadius: 10,
    paddingVertical: 2,
    marginBottom: 30,
    alignItems: 'center',
    borderWidth: 1,
  },
  check: {
    height: 20,
    width: 20,
    position: 'absolute',
    resizeMode: 'contain',
    bottom: 80,
    right: 12,
  },
  sportsView: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    height: 100,
    width: 100,
    borderRadius: 10,
    backgroundColor: COLORS.DARKER_GREY,
    borderWidth: 1,
    marginHorizontal: 10,
    padding: 10,
  },
  sportsImage: {
    height: 45,
    width: 45,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  sportsText: {
    color: COLORS.WHITE,
    fontSize: 12,
    fontFamily: FONTS.HELVETICA,
    fontStyle: 'italic',
    textAlign: 'center',
  },
  activeSportsView: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    height: 100,
    width: 100,
    borderRadius: 10,
    backgroundColor: COLORS.BLUE,
    borderWidth: 1,
    marginHorizontal: 10,
    padding: 10,
  },
  activeSportsImage: {
    height: 45,
    width: 45,
    resizeMode: 'contain',
    marginBottom: 10,
    tintColor: COLORS.BLACK,
  },
  activeSportsText: {
    color: COLORS.BLACK,
    fontSize: 12,
    fontFamily: FONTS.HELVETICA,
    fontStyle: 'italic',
    textAlign: 'center',
  },
  checkIcon: {
    height: 15,
    width: 15,
    resizeMode: 'contain',
    position: 'absolute',
    bottom: 80,
    right: 5,
  },
});
