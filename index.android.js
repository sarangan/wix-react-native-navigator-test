import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import { Navigation } from 'react-native-navigation';

import PageOne from './components/PageOne';
import PageTwo from './components/PageTwo';

Navigation.registerComponent('NavTest.PageOne', () => PageOne);
Navigation.registerComponent('NavTest.PageTwo', () => PageTwo);

Navigation.startSingleScreenApp({
  screen: {
    screen: 'NavTest.PageOne',
    title: 'Page one'
  }
});
