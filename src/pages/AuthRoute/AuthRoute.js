import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import login from "../Login/login";
import splashScreen from "../SplashScreen/splashScreen"

const Auth = createStackNavigator();

export default function AuthRoute() {
  return (
      <Auth.Navigator headerMode='none' mode='card' initialRouteName="SplashScreen">
        <Auth.Screen name="SplashScreen" component={splashScreen} options={{ headerShown: false }} />
        <Auth.Screen name="Login" component={login} options={{ headerShown: false }} />
      </Auth.Navigator>
  );
}
