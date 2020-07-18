import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import Feed from '../../pages/Feed';

const FeedStack = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator
      initialRouteName="Feed"
      screenOptions={{
        headerTitle: '',
        headerTransparent: true,
        headerTintColor: 'white',
      }}
    >
      <Stack.Screen name="Feed" component={Feed} />
    </Stack.Navigator>
  );
};

export default FeedStack;
