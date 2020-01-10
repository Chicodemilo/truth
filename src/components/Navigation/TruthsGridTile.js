import React from 'react';
import {TouchableOpacity, View, Text, StyleSheet} from 'react-native';
import styles from '../../../styles/mainStyles';
import COLORS from '../../constants/Colors';

const TruthsGridTile = props => {
  return (
    <TouchableOpacity
      style={{
        ...styles.gridItem,
        ...{backgroundColor: props.color},
      }}
      onPress={props.onSelect}>
      <View>
        <Text
          numberOfLines={1}
          style={{
            ...styles.ubuntuLight,
            ...{color: 'white', fontSize: 22},
          }}>
          {props.headline}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default TruthsGridTile;
