/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import styles from './styles/mainStyles';
import {Card, Button, Icon} from 'react-native-elements';
// import HeaderBox from './src/components/header/HeaderBox';
// import SearchBox from './src/components/Search/SearchBox';
// import EnterDataBox from './src/components/EnterData/EnterDataBox';
// import NavModal from './src/components/Navigation/NavModal';
import TruthNavigator from './src/components/Navigation/TruthsNavigator';
import HeaderBox from './src/components/header/HeaderBox';
import {enableScreens} from 'react-native-screens';

enableScreens();
export default class App extends Component {
  state = {
    showNav: false,
  };

  showNav = () => {
    this.setState({
      showNav: true,
    });
  };

  hideNav = () => {
    this.setState({
      showNav: false,
    });
  };
  render() {
    return (
      <TruthNavigator />
      //   <View style={styles.mainView}>
      //     <NavModal visible={this.state.showNav} hideNavBox={this.hideNav} />
      //     <HeaderBox showNavBox={this.showNav} />
      //     <SearchBox />
      //     <EnterDataBox />
      //     <Card
      //       title="HELLO WORLD"
      //       image={require('./src/assets/images/pic2.jpg')}>
      //       <Text style={{marginBottom: 10}}>
      //         The idea with React Native Elements is more about component
      //         structure than actual design.
      //       </Text>
      //       <Button
      //         icon={<Icon name="code" color="#ffffff" />}
      //         buttonStyle={{
      //           borderRadius: 0,
      //           marginLeft: 0,
      //           marginRight: 0,
      //           marginBottom: 0,
      //         }}
      //         title="VIEW NOW"
      //       />
      //     </Card>
      //   </View>
    );
  }
}
