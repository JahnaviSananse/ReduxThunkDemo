/**
 * @format
 */

// import {AppRegistry} from 'react-native';
// import App from './App';
// import {name as appName} from './app.json';

// AppRegistry.registerComponent(appName, () => App);

import React from 'react';
import {AppRegistry} from 'react-native';
import {Provider} from 'react-redux';
import App from './App';
import Post from './src/Post';
import {name as appName} from './app.json';
import configureStore from './Redux/store';

const store = configureStore();

const RNRedux = () => (
  <Provider store={store}>
    <Post />
  </Provider>
);

AppRegistry.registerComponent(appName, () => RNRedux);
