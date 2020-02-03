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
// import HeaderBox from './src/components/header/HeaderBox';
import {enableScreens} from 'react-native-screens';
import {Provider} from 'react-redux';

import configureStore from './src/store/configureStore';

enableScreens();
export default class App extends Component {
  store = configureStore();

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
      <Provider store={this.store}>
        <TruthNavigator />
      </Provider>
    );
  }
}
