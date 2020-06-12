import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { useSelector } from 'react-redux';

import Feed from '../pages/Feed';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

const Routes = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator
      initialRouteName="SignIn"
      screenOptions={{
        headerTitle: '',
        headerTransparent: true,
        headerTintColor: 'white',
      }}
    >
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="Feed" component={Feed} />
    </Stack.Navigator>
  );
};

export default Routes;
