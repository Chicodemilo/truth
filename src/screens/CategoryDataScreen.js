import React from 'react';
import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import styles from '../../styles/mainStyles';
import {TRUTHS} from '../data/dummy-data';
import Colors from '../constants/Colors';

const CategoryDataScreen = props => {
  const renderGridItem = itemData => {
    return (
      <TouchableOpacity
        style={styles.gridItem}
        onPress={() => {
          props.navigation.navigate({
            routeName: 'TruthDetails',
            params: {
              truthId: itemData.item.id,
            },
          });
        }}>
        <View>
          <Text>{itemData.item.headline}</Text>
        </View>
      </TouchableOpacity>
    );
  };
  return <FlatList data={TRUTHS} renderItem={renderGridItem} numColumns={2} />;
};

CategoryDataScreen.navigationOptions = {
  headerTitle: 'All The Truths',
};

export default CategoryDataScreen;
