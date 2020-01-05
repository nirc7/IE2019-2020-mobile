import React from 'react';
import { View, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import FirstPage from './Pages/FirstPage';
import SecondPage from './Pages/SecondPage';
// import TabbedPageNavigator from './Pages/TabbedPage';
// import MaterialTabbedPage  from './Pages/MaterialTabbedPage';

class App extends React.Component {
  render() {
    return (
      <AppNavigator />
    );
  }
}


const AppNavigator = createStackNavigator(
  {
    FirstPage: { screen: FirstPage },
    SecondPage: { screen: SecondPage },
    // TabbedPage: { screen: TabbedPageNavigator },
    // MaterialTabbedPage:{screen:MaterialTabbedPage},
  },
  {
    initialRouteName: 'FirstPage',
  }
);

export default createAppContainer(AppNavigator);