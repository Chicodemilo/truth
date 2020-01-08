import React from 'react';
import {TouchableOpacity, View, Text, StyleSheet} from 'react-native';
import styles from '../../../styles/mainStyles';
import COLORS from '../../constants/Colors';

const TruthsGridTile = props => {
  return (
    <TouchableOpacity style={styles.gridItem} onPress={props.onSelect}>
      <View style={{backgroundColor: props.color, padding: 2}}>
        <Text style={{color: 'white'}}>{props.headline}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default TruthsGridTile;
