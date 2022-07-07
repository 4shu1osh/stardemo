import {
  View,
  Text,
  Image,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
  StyleSheet,
} from 'react-native';
import React from 'react';
import SearchBar from '../../../components/searchBar';
import {EnabledButton, DisabledButton} from '../../../components/customButton';
import ROUTE_NAMES from '../../../routes/routeNames';
import STRINGS from '../../../utils/strings';
import COLORS from '../../../utils/colors';
import LOCAL_IMAGES from '../../../utils/localImages';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {completeProfileAction} from './action';
import CustomModal from '../../../components/modal';

const {LABEL, COMMON} = STRINGS;

export default function AthleteRecommendation({route}: any) {
  const {list, name, authToken, _id, username, zip, userType} = route.params;

  console.log('user -- ', _id);

  const [data, setData] = React.useState(list);
  const [searchText, setSearchText] = React.useState('');
  const [selectedAthlete, setSelectedAthlete] = React.useState([]);
  const [label, setLabel] = React.useState(LABEL.FOLLOW);

  const navigation = useNavigation<any>();

  const dispatch = useDispatch();

  const onSearchItem = (text: string) => {
    setSearchText(text);
    setData(
      data.filter((item: any) =>
        item?.name.toLowerCase().includes(text.toLowerCase()),
      ),
    );
  };

  const _renderItem = ({item}: any) => {
    if (selectedAthlete.findIndex(i => i === item) > -1) {
      return (
        <View style={[styles.itemContainer]}>
          {/* <View style={styles.profImg} /> */}
          <Image source={LOCAL_IMAGES.PROFILE_PIC} style={styles.profImg} />
          <Text style={styles.name}>{item.name}</Text>
          <EnabledButton
            label={LABEL.FOLLOWING}
            labelStyle={{fontSize: 12}}
            style={{height: 30, width: 100, marginTop: 10, marginBottom: 10}}
            onPress={() => {
              setSelectedAthlete(
                selectedAthlete.filter((i: any) => item !== item),
              );
            }}
          />
        </View>
      );
    }
    return (
      <View style={styles.itemContainer}>
        {/* <View style={styles.profImg} /> */}
        <Image source={LOCAL_IMAGES.PROFILE_PIC} style={styles.profImg} />

        <Text style={styles.name}>{item.name}</Text>
        <EnabledButton
          label={LABEL.FOLLOW}
          labelStyle={{fontSize: 12}}
          style={{height: 30, width: 100, marginTop: 10, marginBottom: 10}}
          onPress={() => {
            setSelectedAthlete([...selectedAthlete, item]);
          }}
        />
      </View>
    );
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.BLACK}}>
      <View style={styles.container}>
        <View style={styles.headerView}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
              source={LOCAL_IMAGES.BACK_BUTTON}
              style={styles.backButton}
            />
          </TouchableOpacity>
          <Text style={styles.heading}>
            {COMMON.ATHLETE_RECOMMENDATION_HEADING}
          </Text>
        </View>
        <SearchBar onChangeText={onSearchItem} label={COMMON.SEARCH_ATHLETE} />

        <FlatList
          contentContainerStyle={{alignItems: 'center'}}
          numColumns={2}
          data={data}
          renderItem={_renderItem}
        />

        <EnabledButton
          label={LABEL.SUBMIT.toUpperCase()}
          onPress={() => {
            dispatch<any>(
              completeProfileAction(
                authToken,
                username,
                _id,
                zip,
                name,
                userType,
              ),
            );
            navigation.navigate(ROUTE_NAMES.BOTTOM_TABS);
          }}

        />
      </View>
      {/* <CustomModal /> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.BLACK,
    padding: 20,
  },
  backButton: {
    height: 20,
    width: 20,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  headerView: {
    marginBottom: 20,
  },
  heading: {
    color: COLORS.WHITE,
    fontSize: 24,
    fontWeight: '900',
    fontStyle: 'italic',
    lineHeight: 30,
  },
  itemContainer: {
    height: 160,
    width: 160,
    backgroundColor: COLORS.DARK_GREY,
    borderRadius: 10,
    padding: 10,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  name: {
    color: COLORS.WHITE,
    fontSize: 16,
    fontStyle: 'italic',
    lineHeight: 30,
  },
  profImg: {
    height: 50,
    width: 50,
    marginBottom: 10,
    resizeMode: 'contain'
  },
});
