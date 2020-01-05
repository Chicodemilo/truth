import React from 'react';
import {View, Text, Button} from 'react-native';
import styles from '../../styles/mainStyles';

const CategoryDataScreen = props => {
  console.log(props);
  return (
    <View style={styles.screen}>
      <Text>All My Truths Screen</Text>
      <Button
        title="Go"
        onPress={() => {
          props.navigation.navigate({routeName: 'TruthDetails'});
        }}
      />
    </View>
  );
};

export default CategoryDataScreen;
