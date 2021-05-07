import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import homePage from '../HomePage/homePage';

const Logged = createStackNavigator();

export default function LoggedRoute() {
  return (
      <Logged.Navigator headerMode='screen' initialRouteName="HomePage">
        <Logged.Screen name="HomePage" component={homePage} options={{ headerShown: true }} />
      </Logged.Navigator>
  );
}
