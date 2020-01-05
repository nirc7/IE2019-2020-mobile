import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';

import { createAppContainer } from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';
 
import MyHomeScreen from './Pages/Home';
import MyDetailsScreen from './Pages/Details';
 

const App = createDrawerNavigator({
  //Drawer Optons and indexing
  Screen1: { //Title
    screen: MyHomeScreen ,
    navigationOptions: {
      drawerLabel: "My Home Screen"
    }
  },
  Screen2: {//Title
    screen: MyDetailsScreen,
    navigationOptions: {
      drawerLabel: "My Details Screen",
      drawerIcon: ({ tintColor }) => (
            <Image
              source={require('./assets/icon.png')}
              style={{width:30, height:30}}
            />
          ), 
    },
  },
});
export default createAppContainer(App); 

