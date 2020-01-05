import React from 'react';
import {View, Button} from 'react-native';
import {Input} from 'react-native-elements';
import styles from '../../../styles/mainStyles';

const HeadLineInput = props => {
  return (
    <View style={styles.test}>
      <Input
        placeholder="Enter Headline"
        leftIcon={{type: 'materialicons', name: 'chevron-right'}}
        onChangeText={props.headlineInputHandlerMethod}
        inputStyle={styles.headlineInput}
      />
      <Button title="Add" onPress={props.addHeadlineHandlerMethod} />
    </View>
  );
};

export default HeadLineInput;
