import React from 'react';

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createDrawerNavigator} from 'react-navigation-drawer';
import CategoryDataScreen from '../../screens/CategoryDataScreen';
import TruthDetailsScreen from '../../screens/TruthDetailsScreen';
import SearchScreen from '../../screens/SearchScreen';
import AccountScreen from '../../screens/AccountScreen';
import Colors from '../../constants/Colors';
// import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import Icon from 'react-native-vector-icons/FontAwesome';

const defaultStackNavOptions = navData => {
  return {
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
        name="amazon"
        style={{color: Colors.primaryRed, fontSize: 23, paddingRight: 15}}
        onPress={() => {
          //   navData.navigation.toggleDrawer();
          console.log('drawer menu');
        }}
      />
      // <HeaderButtons>
      //   <Item title="HAMS" iconName="menu" />
      // </HeaderButtons>
    ),
  };
};

const TruthNavigator = createStackNavigator(
  {
    //either way vvvv
    Truths: {screen: CategoryDataScreen},
    TruthDetails: TruthDetailsScreen,
  },
  {
    defaultNavigationOptions: defaultStackNavOptions,
  },
);

const SearchNavigator = createStackNavigator(
  {
    Search: SearchScreen,
    Details: TruthDetailsScreen,
  },
  {
    defaultNavigationOptions: defaultStackNavOptions,
  },
);

const AccountNavigator = createStackNavigator(
  {
    Account: AccountScreen,
  },
  {
    defaultNavigationOptions: defaultStackNavOptions,
  },
);

AccountNavigator.navigationOptions = {
  headerTitle: 'Your Account',
};

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

const TruthTabNavigator = createBottomTabNavigator(
  {
    MyTruths: {
      screen: TruthNavigator,
      navigationOptions: {
        tabBarIcon: tabInfo => {
          return <Icon name="anchor" size={25} color={tabInfo.tintColor} />;
        },
      },
    },
    Search: {
      screen: SearchNavigator,
      navigationOptions: {
        tabBarLabel: 'Enter The Dragon',
        tabBarIcon: tabInfo => {
          return <Icon name="search" size={25} color={tabInfo.tintColor} />;
        },
      },
    },
  },
  {
    tabBarOptions: {
      activeTintColor: Colors.primaryRed,
    },
  },
);

const MainNavigator = createDrawerNavigator({
  MyTruths: TruthTabNavigator,
  Search: SearchNavigator,
  MyAccount: AccountNavigator,
});

export default createAppContainer(MainNavigator);
