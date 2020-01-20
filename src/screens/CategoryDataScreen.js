import React from 'react';
import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import styles from '../../styles/mainStyles';
import {TRUTHS} from '../data/dummy-data';
import TruthsGridTile from '../components/Navigation/TruthsGridTile';
import Icon from 'react-native-vector-icons/FontAwesome';
import Colors from '../constants/Colors';

const CategoryDataScreen = props => {
  const renderGridItem = itemData => {
    return (
      <TruthsGridTile
        headline={itemData.item.headline}
        color={itemData.item.color}
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
  return <FlatList data={TRUTHS} renderItem={renderGridItem} numColumns={2} />;
};
CategoryDataScreen.navigationOptions = navData => {
  return {
    headerRight: () => (
      <Icon
        name="bars"
        style={{color: Colors.primaryBlue, fontSize: 23, paddingRight: 15}}
        onPress={() => {
          navData.navigation.toggleDrawer;
        }}
      />
      // <HeaderButtons>
      //   <Item title="HAMS" iconName="menu" />
      // </HeaderButtons>
    ),
  };
};
// CategoryDataScreen.navigationOptions = {
//   headerTitle: 'All Truths',
// };

export default CategoryDataScreen;
