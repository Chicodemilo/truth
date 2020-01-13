/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import styles from '../../styles/mainStyles';
import {TRUTHS} from '../data/dummy-data';
import {Image, Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

const TruthDetailsScreen = props => {
  const saveAndGoBack = () => {
    console.log('Do save stuff');
    props.navigation.goBack();
  };

  const truthId = props.navigation.getParam('truthId');
  const selectedTruth = TRUTHS.find(truth => truth.id === truthId);

  //   this data can also be passed via a prop vvvvvv
  //   const truthColor = props.navigation.getParam('color');

  console.log(selectedTruth.imageUrl);
  return (
    <KeyboardAvoidingView style={styles.screen}>
      <View style={styles.truthCard}>
        <View style={styles.truthCardHeadline}>
          <Text style={styles.truthCardHeadlineText}>
            {selectedTruth.headline}
          </Text>
        </View>
        <Image
          source={{uri: selectedTruth.imageUrl}}
          style={styles.truthCardImage}
          PlaceholderContent={<ActivityIndicator />}
        />
        <ScrollView style={styles.truthCardScroll}>
          <Text style={{...styles.ubuntuLight, ...{fontSize: 10}}}>
            image url:
          </Text>
          <TextInput
            style={{...styles.test, ...{marginBottom: 10}}}
            value={selectedTruth.imageUrl}
          />
          <Text style={{...styles.ubuntuLight, ...{fontSize: 10}}}>
            headline:
          </Text>
          <TextInput
            style={{...styles.test, ...{marginBottom: 10}}}
            value={selectedTruth.headline}
          />
          <Text style={{...styles.ubuntuLight, ...{fontSize: 10}}}>
            search terms:
          </Text>
          <TextInput
            style={{...styles.test, ...{marginBottom: 10}}}
            value={selectedTruth.searchTerms}
          />
          <Text style={{...styles.ubuntuLight, ...{fontSize: 10}}}>text:</Text>
          <TextInput
            multiline
            value={selectedTruth.text}
            style={{...styles.test, ...{marginBottom: 10}}}
            maxLength={200}
          />
          <Text style={{...styles.ubuntuLight, ...{fontSize: 10}}}>
            chart title:
          </Text>
          <TextInput
            style={{...styles.test, ...{marginBottom: 10}}}
            value={selectedTruth.chartTitle}
          />
          <Text style={{...styles.ubuntuLight, ...{fontSize: 10}}}>
            chart option one:
          </Text>
          <TextInput
            style={{...styles.test, ...{marginBottom: 10}}}
            value={selectedTruth.optionOne}
          />
          <Text style={{...styles.ubuntuLight, ...{fontSize: 10}}}>
            chart option one count:
          </Text>
          <TextInput
            style={{...styles.test, ...{marginBottom: 10}}}
            value={`${selectedTruth.optionOneCount}`}
            keyboardType="number-pad"
          />
          <Text style={{...styles.ubuntuLight, ...{fontSize: 10}}}>
            chart option two:
          </Text>
          <TextInput
            style={{...styles.test, ...{marginBottom: 10}}}
            value={selectedTruth.optionTwo}
          />
          <Text style={{...styles.ubuntuLight, ...{fontSize: 10}}}>
            chart option two count:
          </Text>
          <TextInput
            style={{...styles.test, ...{marginBottom: 10}}}
            value={`${selectedTruth.optionTwoCount}`}
            keyboardType="number-pad"
          />
          <Text style={{...styles.ubuntuLight, ...{fontSize: 10}}}>
            chart option three:
          </Text>
          <TextInput
            style={{...styles.test, ...{marginBottom: 10}}}
            value={selectedTruth.optionThree}
          />
          <Text style={{...styles.ubuntuLight, ...{fontSize: 10}}}>
            chart option three count:
          </Text>
          <TextInput
            style={{...styles.test, ...{marginBottom: 10}}}
            value={`${selectedTruth.optionThreeCount}`}
            keyboardType="number-pad"
          />
        </ScrollView>
        <Button
          icon={<Icon name="check" color="white" size={24} />}
          buttonStyle={{
            borderRadius: 0,
            marginLeft: 0,
            marginRight: 0,
            marginBottom: 0,
          }}
          onPress={() => {
            saveAndGoBack();
          }}
        />
      </View>

      {/* vvvvv JUST TO REMEMBER HOW TO DO THIS STUFF */}
      {/* 
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
      /> */}
    </KeyboardAvoidingView>
  );
};

// TruthDetailsScreen.navigationOptions = navData => {
//   const truthId = navData.navigation.getParam('truthId');
//   const selectedTruth = TRUTHS.find(truth => truth.id === truthId);
// };

export default TruthDetailsScreen;
