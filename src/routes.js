import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthRoute from './pages/AuthRoute/AuthRoute';
import LoggedRoute from './pages/LoggedRoute/Logged';
import Authentication from '../src/services/Authentication';

export default function Routes() {

  if (Authentication()) {
    console.log('Auth: ',Authentication())
    return (
      <NavigationContainer>
        <LoggedRoute />
      </NavigationContainer>
    )
  } else {
    console.log('Auth: ',Authentication())
    return (
      <NavigationContainer>
        <AuthRoute />
      </NavigationContainer>
    );
  }
}


// function Root() {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen name="Profile" component={Profile} />
//       <Stack.Screen name="Settings" component={Settings} />
//     </Stack.Navigator>
//   );
// }

