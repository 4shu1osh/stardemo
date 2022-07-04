import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
  Image,
} from 'react-native';
import React from 'react';
import {EnabledButton, DisabledButton} from '../../../components/customButton';
import COLORS from '../../../utils/colors';
import LOCAL_IMAGES from '../../../utils/localImages';
import STRINGS from '../../../utils/strings';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import ROUTE_NAMES from '../../../routes/routeNames';
import SearchBar from '../../../components/searchBar';
import FONTS from '../../../utils/fonts';
import {zipCodeAction} from './action';
import ListEmptyComponent from '../../../components/listEmptyComponent';
import NoDataComponent from '../../../components/noDataComponent';

const {LABEL, COMMON} = STRINGS;

export default function ZipcodeSearch({route}: any) {
  const {zipCallback} = route.params;

  const [data, setData] = React.useState([]);
  const [searchText, setSearchText] = React.useState('1');
  const [selectedZip, setSelectedZip] = React.useState('');
  const [zipCodeList, setZipCodeList] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [page, setPage] = React.useState(1);

  const navigation = useNavigation<any>();

  const dispatch: any = useDispatch();
  const {authToken} = useSelector((store: any) => store.verificationReducer);

  const getZipCode = (response: any) => {
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
    setIsLoading(true);
    setPage(page + 1);
    dispatch(zipCodeAction(authToken, getZipCode, page, searchText));
    setIsLoading(false);
  };

  React.useEffect(() => {}, [zipCodeList]);

  React.useEffect(() => {
    setData([])
    dispatch(zipCodeAction(authToken, getZipCode, page, searchText));
  }, [searchText]);

  const _renderItem = ({item}: any) => {
    return (
      <TouchableOpacity
        onPress={() => {
          setSelectedZip(item?.zipcode);
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
    }

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
            searchText.length > 0? ListEmptyComponent({searchText}) : NoDataComponent
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
    height: 20,
    width: 20,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  container: {
    flex: 1,
    backgroundColor: COLORS.BLACK,
    //   justifyContent: 'space-between',
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
  itemContainer: {
    backgroundColor: COLORS.BLACK,
    paddingVertical: 16,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    alignSelf: 'flex-start',
  },
  itemText: {
    color: COLORS.WHITE,
    fontSize: 16,
    marginLeft: 30,
  },
  listContainer: {
    paddingVertical: 10,
  },
    itemSeparator: {
        height: 1,
        width: '100%',
        backgroundColor: COLORS.DARK_GREY,
        marginVertical: 10,
    },
});
