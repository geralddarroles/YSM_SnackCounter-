import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack'; 
import MainScreen from './src/screens/MainScreen';
import InfoScreen from './src/screens/InfoScreen';

const navigator = createStackNavigator({
    Counter:MainScreen,
    Info:{
        screen:InfoScreen,
        navigationOptions: { title: ""},
    }
}, 


{
  initialRouteName:'Counter',
  defaultNavigationOptions:{
    headerTitleStyle: { alignSelf:"center" },
    title:"Snack Counter",
    headerStyle: {
      backgroundColor: "black",
    },
    headerTintColor:"white"
  },



}); 

export default createAppContainer(navigator); 