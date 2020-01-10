import React from 'react';
import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import styles from '../../styles/mainStyles';
import {TRUTHS} from '../data/dummy-data';
import TruthsGridTile from '../components/Navigation/TruthsGridTile';

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

CategoryDataScreen.navigationOptions = {
  headerTitle: 'All Truths',
};

export default CategoryDataScreen;
