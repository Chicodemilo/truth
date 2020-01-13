import React from 'react';
import {Text} from 'react-native';

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import CategoryDataScreen from '../../screens/CategoryDataScreen';
import TruthDetailsScreen from '../../screens/TruthDetailsScreen';
import Colors from '../../constants/Colors';
// import {HeaderButtons, Item} from 'react-navigation-header-buttons';

import Icon from 'react-native-vector-icons/FontAwesome';

const TruthNavigator = createStackNavigator(
  {
    //either way vvvv
    Truths: {screen: CategoryDataScreen},
    TruthDetails: TruthDetailsScreen,
  },
  {
    defaultNavigationOptions: {
      headerTitleStyle: {
        fontFamily: 'Ubuntu-Light',
        fontSize: 14,
        letterSpacing: 1.3,
      },
      headerStyle: {
        backgroundColor: 'white',
      },
      headerTintColor: Colors.primaryRed,
      headerRight: () => (
        <Icon
          name="bars"
          style={{color: Colors.primaryBlue, fontSize: 23, paddingRight: 15}}
          onPress={() => {
            console.log('MENU PRESSED');
          }}
        />
        // <HeaderButtons>
        //   <Item title="HAMS" iconName="menu" />
        // </HeaderButtons>
      ),
    },
  },
);

//can do as an object on each navigation screen:
// const TruthNavigator = createStackNavigator({Truths: {
//     screen: CategoryDataScreen,
//     navigationOptions: {
//           headerTitleStyle: {
//     fontFamily: 'Ubuntu-Light',
//     fontSize: 14,
//     letterSpacing: 1.3,
//   },
//   headerStyle: {
//     backgroundColor: 'white',
//   },
//   headerTintColor: Colors.primaryRed,

//     }
// });

export default createAppContainer(TruthNavigator);
