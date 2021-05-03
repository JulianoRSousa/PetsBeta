import * as React from "react";
import { View, Text, TouchableOpacity, Button } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import authScreen from "./pages/authScreen";
import login from "../src/pages/login";
import * as appColors from '../src/components/colors';

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator initialRouteName="Auth">
      <Stack.Screen
        name="Auth"
        component={authScreen}
      />
      <Stack.Screen name="Login" component={login} options={{headerShown:false}} />
    </Stack.Navigator>
  );
}
