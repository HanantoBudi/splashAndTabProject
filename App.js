/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {TabNavigator} from 'react-navigation'
import Home from './scr/Home'
import Main from './scr/Main'
import Splash from './scr/Splash'
import Friends from './scr/Friends'
import Relatives from './scr/Relatives'

const Navigation = TabNavigator({
  relatives:{
    screen:Relatives,
  },
  friends:{
    screen:Friends,
  },
  //splash:{
  //  screen:Splash,
  //},
  //home:{
  //  screen:Home,
  //},
  //main:{
  //  screen:Main,
  //}
})
export default Navigation;