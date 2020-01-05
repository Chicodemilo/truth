import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import CategoryDataScreen from '../../screens/CategoryDataScreen';
import TruthDetailsScreen from '../../screens/TruthDetailsScreen';

const TruthNavigator = createStackNavigator({
  Truths: CategoryDataScreen,
  TruthDetails: TruthDetailsScreen,
});

export default createAppContainer(TruthNavigator);
