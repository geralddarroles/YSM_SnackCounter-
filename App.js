import React from "react";
import { Button, TouchableOpacity, Text } from "react-native";
import * as Linking from 'expo-linking';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import MainScreen from './src/screens/MainScreen';
import InfoScreen from './src/screens/InfoScreen';
import EditScreen from "./src/screens/Editscreen";


const Stack = createStackNavigator()


const config = {
  screens: {
    MainScreen: "home",
    InfoScreen: {
      path: "info",
      parse: {
        message: (message) => `${message}`,
      },
      stringify: {
        message: (message) => message
      },
    },
    EditScreen: "edit",
  }
}


const App = () => {


  // const getInitialUrl = async () => {

  //   try {
  //     const url = await Linking.getInitialURL()
  //     const { path, params } = Linking.parse(url)
  //     console.log("Parse URL")
  //     console.log(path)
  //   } catch (err) {
  //     console.log("No incoming url ")
  //     console.log(err)
  //   }
  // }

  // const currentUrl = getInitialUrl()

  const prefix = Linking.makeUrl()

  const linking = {
    prefixes: [prefix, "myapp://", "/"],
    config: {
      screens: {
        MainScreen: "home",
        InfoScreen: "info",
        EditScreen: "edit"
      },
    },
  };


  return (
    < NavigationContainer
      linking={linking}
      fallback={<Text>Link did not work</Text>}
    >
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: "black",
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}

      >
        <Stack.Screen name="MainScreen" component={MainScreen} />
        <Stack.Screen name="InfoScreen" component={InfoScreen} />
        <Stack.Screen name="EditScreen" component={EditScreen} />
      </Stack.Navigator>
    </NavigationContainer >
  )
}

export default App; 