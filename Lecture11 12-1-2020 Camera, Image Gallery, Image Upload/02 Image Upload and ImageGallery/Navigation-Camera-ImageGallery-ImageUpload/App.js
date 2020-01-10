import React from 'react';
import { View, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import FirstPage from './Pages/FirstPage.jsx';
import CameraPage from './Pages/CameraPage';
import ImageGallery from './Pages/ImageGallery';

const AppNavigator = createStackNavigator(
  {
    FirstPage: { screen: FirstPage },
    CameraPage: { screen: CameraPage },
    ImageGallery: { screen: ImageGallery },

  },
  {
    initialRouteName: 'FirstPage',
  }
);

export default createAppContainer(AppNavigator);