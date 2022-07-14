import {
  View,
  Text,
  Image,
  FlatList,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {zipCodeAction} from './action';
import COLORS from '../../../utils/colors';
import STRINGS from '../../../utils/strings';
import {useDispatch, useSelector} from 'react-redux';
import ROUTE_NAMES from '../../../routes/routeNames';
import LOCAL_IMAGES from '../../../utils/localImages';
import SearchBar from '../../../components/searchBar';
import {useNavigation} from '@react-navigation/native';
import ListEmptyComponent from '../../../components/listEmptyComponent';

const {COMMON} = STRINGS;

export default function ZipcodeSearch({route}: any) {
  const {zipCallback} = route.params;

  const [page, setPage] = React.useState(1);
  const [data, setData] = React.useState([]);
  const [searchText, setSearchText] = React.useState('');
  const [zipCodeList, setZipCodeList] = React.useState([]);

  const navigation = useNavigation<any>();

  const dispatch: any = useDispatch();
  const {authToken} = useSelector((store: any) => store.verificationReducer);

  const getZipCode = (response: any) => {
    //@ts-ignore
    setData([...data, ...response]);
    setZipCodeList(response);
  };

  const onSearchItem = (text: string) => {
    setSearchText(text);
    setData(
      zipCodeList.filter((item: any) =>
        item?.zipCode?.toLowerCase().includes(text.toLowerCase()),
      ),
    );
  };
  const onEndReached = () => {
    setPage(page + 1);
    dispatch(zipCodeAction(authToken, getZipCode, page, searchText));
  };

  React.useEffect(() => {
    setData([]);
    searchText.length > 0 &&
      dispatch(zipCodeAction(authToken, getZipCode, page, searchText));
  }, [searchText]);

  const _renderItem = ({item}: any) => {
    return (
      <TouchableOpacity
        onPress={() => {
          zipCallback(item?.zipcode);
          navigation.goBack();
        }}
        style={styles.itemContainer}>
        <Text style={styles.itemText}>
          {item?.zipcode + ',  ' + item?.city + ', ' + item?.state}
        </Text>
      </TouchableOpacity>
    );
  };

  const ItemSeparatorComponent = () => {
    return <View style={styles.itemSeparator} />;
  };

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
          <Text style={styles.heading}>{COMMON.SEARCH_ZIP_CODE}</Text>
        </View>
        <SearchBar onChangeText={onSearchItem} label={COMMON.SEARCH_ZIP_CODE} />

        <FlatList
          contentContainerStyle={styles.listContainer}
          data={data}
          renderItem={_renderItem}
          ListEmptyComponent={
            searchText.length > 0 ? ListEmptyComponent({searchText}) : null
          }
          onEndReached={onEndReached}
          onEndReachedThreshold={0.5}
          keyExtractor={(_, index) => index.toString()}
          ItemSeparatorComponent={ItemSeparatorComponent}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  backButton: {
    width: 20,
    height: 20,
    marginBottom: 20,
    resizeMode: 'contain',
  },
  container: {
    flex: 1,
    backgroundColor: COLORS.BLACK,
  },
  headerView: {
    paddingHorizontal: 20,
    backgroundColor: COLORS.BLACK,
  },
  heading: {
    fontSize: 28,
    marginBottom: 10,
    letterSpacing: 1,
    fontWeight: '900',
    fontStyle: 'italic',
    color: COLORS.WHITE,
  },
  itemContainer: {
    paddingVertical: 16,
    alignItems: 'center',
    flexDirection: 'row',
    alignSelf: 'flex-start',
    justifyContent: 'center',
    backgroundColor: COLORS.BLACK,
  },
  itemText: {
    fontSize: 16,
    marginLeft: 30,
    color: COLORS.WHITE,
  },
  listContainer: {
    paddingVertical: 10,
  },
  itemSeparator: {
    height: 1,
    width: '100%',
    marginVertical: 10,
    backgroundColor: COLORS.DARK_GREY,
  },
});
