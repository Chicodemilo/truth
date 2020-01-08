import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import CategoryDataScreen from '../../screens/CategoryDataScreen';
import TruthDetailsScreen from '../../screens/TruthDetailsScreen';
import Colors from '../../constants/Colors';

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
