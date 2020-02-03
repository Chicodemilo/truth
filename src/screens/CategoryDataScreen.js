import React from 'react';
import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import styles from '../../styles/mainStyles';
// import {TRUTHS} from '../data/dummy-data';
import TruthsGridTile from '../components/Navigation/TruthsGridTile';
import {useSelector} from 'react-redux';

const CategoryDataScreen = props => {
  const storeTruths = useSelector(state => state.truths.fillerTruths);
  const userName = useSelector(state => state.truths.userName);

  const renderGridItem = itemData => {
    return (
      <TruthsGridTile
        headline={itemData.item.headline}
        color={itemData.item.color}
        id={itemData.item.id}
        onSelect={() => {
          props.navigation.navigate({
            routeName: 'TruthDetails',
            params: {
              truthId: itemData.item.id,
            },
          });
        }}
      />
    );
  };
  return (
    <View>
      <Text style={styles.test}>{userName}</Text>
      <FlatList data={storeTruths} renderItem={renderGridItem} numColumns={2} />
    </View>
  );
};
// CategoryDataScreen.navigationOptions = () => {
//   return {
//     headerRight: () => (
//       <Icon
//         name="bars"
//         style={{color: Colors.primaryRed, fontSize: 23, paddingRight: 15}}
//         onPress={() => {
//           console.log('TOGGLE');
//           //   navData.navigation.toggleDrawer;
//         }}
//       />
//     ),
//   };
// };
// CategoryDataScreen.navigationOptions = {
//   headerTitle: 'All Truths',
// };

export default CategoryDataScreen;
