/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {Provider} from 'react-redux';

import {
  AppRegistry
} from 'react-native';

import Main from './app/components/Main';
import {configureStore} from './app/store';

class boilerPlate extends Component {
  render() {
    return (
      <Provider store={configureStore()}>
        <Main></Main>
      </Provider>
    );
  }
}


AppRegistry.registerComponent('boilerPlate', () => boilerPlate);
