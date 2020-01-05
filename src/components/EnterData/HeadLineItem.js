import React from 'react';
import {View, Text, TouchableOpacity, TouchableHighlight} from 'react-native';
import styles from '../../../styles/mainStyles';

const HeadLineItem = props => {
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      //   underlayColor={'red'}
      onPress={props.onDelete}>
      <View style={styles.headlineItem}>
        <Text>{props.headline}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default HeadLineItem;
