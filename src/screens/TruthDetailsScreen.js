import React from 'react';
import {View, Text, Button} from 'react-native';
import styles from '../../styles/mainStyles';
import {TRUTHS} from '../data/dummy-data';
import Colors from '../constants/Colors';

const TruthDetailsScreen = props => {
  const saveAndGoBack = () => {
    console.log('Do save stuff');
    props.navigation.goBack();
  };

  const truthId = props.navigation.getParam('truthId');
  const selectedTruth = TRUTHS.find(truth => truth.id === truthId);

  //   this data can also be passed via a prop vvvvvv
  //   const truthColor = props.navigation.getParam('color');

  return (
    <View style={styles.screen}>
      <Text>Details for {selectedTruth.headline}</Text>
      <Button
        title="Go2"
        onPress={() => {
          props.navigation.navigate('Truths');
        }}
      />
      <Button
        title="save"
        onPress={() => {
          saveAndGoBack();
        }}
      />
    </View>
  );
};

TruthDetailsScreen.navigationOptions = navData => {
  const truthId = navData.navigation.getParam('truthId');
  const selectedTruth = TRUTHS.find(truth => truth.id === truthId);
  return {
    headerTitle: selectedTruth.headline,
    // THESE ARE NOW SET IN THE NAVIGATOR TruthsNavigaor.js
    // headerTitleStyle: {
    //   fontFamily: 'Ubuntu-Light',
    //   fontSize: 14,
    //   letterSpacing: 1.2,
    // },
    // headerStyle: {
    //   backgroundColor: 'white',
    // },
    // headerTintColor: Colors.primaryRed,
  };
};

export default TruthDetailsScreen;
