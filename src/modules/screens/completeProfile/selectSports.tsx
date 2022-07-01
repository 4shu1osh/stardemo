import {
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
  Text,
  StyleSheet,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import React from 'react';
import COLORS from '../../../utils/colors';
import ROUTE_NAMES from '../../../routes/routeNames';
import LOCAL_IMAGES from '../../../utils/localImages';
import {useNavigation} from '@react-navigation/native';
import STRINGS from '../../../utils/strings';
import {DisabledButton, EnabledButton} from '../../../components/customButton';
import {useSelector} from 'react-redux';
import API_URL from '../../../utils/apiURL';
import axios from 'axios';
import FONTS from '../../../utils/fonts';
import SearchBar from '../../../components/searchBar';

const {COMMON, LABEL} = STRINGS;

export default function SelectSports({route}: any) {
  const {callbackFn, sports} = route.params;

  const [selectedSports, setSelectedSports] = React.useState({...sports});
  const [sportsList, setSportsList] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [searchText, setSearchText] = React.useState('');

  const {authToken} = useSelector((store: any) => store.verificationReducer);

  const getSports = (response: any) => {
    setData(response);
    setSportsList(response);
  };

  React.useEffect(() => {}, [selectedSports]);

  React.useEffect(() => {
    const $https = axios.create({
      baseURL: API_URL.BASE_URL,
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    });

    $https.defaults.headers.common.Authorization = `Bearer ${authToken}`;
    $https
      .get(`${API_URL.SPORTS}`)
      .then(response => {
        console.log(response);

        getSports(response.data.data);
      })
      .catch(error => {
        console.log('sports', error);
      });
  }, []);

  const ListEmptyComponent = () => {
    return (
      <View style={styles.emptyContainer}>
        <Image source={LOCAL_IMAGES.NO_DATA} style={styles.emptyImage} />
        <Text style={[styles.heading, {fontSize: 16, letterSpacing: 0}]}>
          {COMMON.NO_DATA_FOUND}
        </Text>
        <Text style={styles.emptyText}>
          {COMMON.NO_DATA_FOUND_DESC + `'${searchText}'`}
        </Text>
      </View>
    );
  };

  const NoDataComponent = () => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    if (isLoading)
      return (
        <ActivityIndicator
          animating={isLoading}
          size="large"
          color={COLORS.BLUE}
        />
      );
    else
      return (
        <View style={styles.emptyContainer}>
          <Image source={LOCAL_IMAGES.EMPTY_BOX} style={styles.emptyImage} />
          <Text style={[styles.heading, {fontSize: 16, letterSpacing: 0}]}>
            {COMMON.CANNOT_FETCH_DATA}
          </Text>
          <Text style={styles.emptyText}>{COMMON.CANNOT_FETCH_DATA_DESC}</Text>
        </View>
      );
  };

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

  const [data, setData] = React.useState([]);

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.BLACK}}>
      <View style={styles.container}>
        <View style={styles.headerView}>
          <TouchableOpacity
            onPress={() => navigation.navigate(ROUTE_NAMES.COMPLETE_PROFILE)}>
            <Image
              source={LOCAL_IMAGES.BACK_BUTTON}
              style={styles.backButton}
            />
          </TouchableOpacity>
          <Text style={styles.heading}>{COMMON.SELECT_SPORTS_HEADING}</Text>
        </View>
        <SearchBar onChangeText={onSearchItem} />

        <FlatList
          contentContainerStyle={{alignItems: 'center'}}
          numColumns={3}
          data={data}
          renderItem={_renderItem}
          ListEmptyComponent={
            sportsList.length > 0 ? ListEmptyComponent : NoDataComponent
          }
        />

        <View style={{alignSelf: 'center'}}>
          {Object.keys(selectedSports).length > 0 ? (
            <EnabledButton
              label={LABEL.SUBMIT.toUpperCase()}
              onPress={() => {
                callbackFn(selectedSports);
                navigation.navigate(ROUTE_NAMES.COMPLETE_PROFILE);
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
  emptyImage: {
    height: 100,
    width: 100,
    resizeMode: 'contain',
    marginBottom: 20,
    marginHorizontal: 10,
  },
  emptyText: {
    color: COLORS.GREY,
    fontSize: 14,
    fontFamily: FONTS.HELVETICA,
    textAlign: 'center',
  },
  emptyContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    top: 100,
  },
});
