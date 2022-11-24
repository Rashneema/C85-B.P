import * as React from "react";
import { NavigationContainer } from '@react-navigation/native';

import { createStackNavigator } from "@react-navigation/stack";

//import login ,register and drawer navigator


//importing and initialising firebase
import * as firebase from "firebase";
import { firebaseConfig } from "./config";


if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}

const Stack = createStackNavigator();

const StackNav = () => {
  return(
  <Stack.Navigator initialRouteName="Login"  screenOptions={{
    headerShown: false,
    gestureEnabled: false
  }}>
   { /*create the screens here*/}
    
  </Stack.Navigator>)
}

export default function App() {
  return (
    <NavigationContainer>
      <StackNav/>
    </NavigationContainer>)

}

