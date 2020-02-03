import React from 'react';
import {TouchableOpacity, View, Text, StyleSheet} from 'react-native';
import styles from '../../../styles/mainStyles';
import {useSelector, useDispatch} from 'react-redux';
import COLORS from '../../constants/Colors';
import {SELECT_TRUTH} from '../../store/actions/truths';

const TruthsGridTile = props => {
  const dispatch = useDispatch();

  const handleSelect = key => {
    dispatch({type: SELECT_TRUTH, activeTruthKey: key});
    props.onSelect();
  };

  return (
    <TouchableOpacity
      style={{
        ...styles.gridItem,
        ...{backgroundColor: props.color},
      }}
      onPress={() => handleSelect(props.id)}>
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
