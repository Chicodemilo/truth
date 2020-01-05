import React from 'react';
import {View} from 'react-native';
import {Header} from 'react-native-elements';
import styles from '../../../styles/mainStyles';

const HeaderBox = props => {
  return (
    <View style={styles.headerBox}>
      <Header
        statusBarProps={{barStyle: 'light-content'}}
        barStyle="light-content"
        placement="left"
        backgroundColor="white"
        rightComponent={{
          icon: 'menu',
          color: 'gray',
          onPress: props.showNavBox,
        }}
        centerComponent={{
          text: 'totalTRUTH',
          style: {
            color: '#ad0000',
            letterSpacing: 2,
            fontSize: 25,
            fontFamily: 'Ubuntu-Light',
          },
        }}
      />
    </View>
  );
};

export default HeaderBox;
