import React from 'react';
import {View, Text, Button} from 'react-native';
import styles from '../../styles/mainStyles';

const TruthDetailsScreen = props => {
  return (
    <View style={styles.screen}>
      <Text>The Truth Details Screen</Text>
      <Button
        title="Go2"
        onPress={() => {
          props.navigation.navigate('Truths');
        }}
      />
    </View>
  );
};

export default TruthDetailsScreen;
