import 'react-native-gesture-handler';

import React from 'react';

import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';

import './config/ReactotronConfig';
import store from './redux';

import Routes from './routes';

const Caw = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </Provider>
  );
};

export default Caw;
