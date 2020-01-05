import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

import TabbedAlternatePage from './TabbedAlternatePage';
import TabbedSecondAlternatePage from './TabbedSecondAlternatePage';

import Ionicons from 'react-native-vector-icons/Ionicons';

class TabbedPage extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={{ color: 'red', fontSize: 28, margin: 15 }}>tabbed Page!</Text>
      </View>
    );
  }
}

const MaterialTabbedPageNavigator = createMaterialBottomTabNavigator(
  {
    Tabbed_Page: {
      screen: TabbedPage,
      navigationOptions: {
        tabBarIcon: ({ focused }) => <Ionicons name={'ios-options'} size={20} color={focused ? '#FFF' : '#DACE91'} />,
      }
    },
    TabbedAlternatePage: {
      screen: TabbedAlternatePage,
      navigationOptions: {
        tabBarIcon: ({ focused }) => <Ionicons name={'md-american-football'} size={20} color={focused ? '#FFF' : '#DACE91'} />,
      }
    },
    'Tabbed Second Alternate Page': {
      screen: TabbedSecondAlternatePage,
      navigationOptions: {
        tabBarIcon: ({ focused }) => <Ionicons name={'md-add-circle'} size={20} color={focused ? '#FFF' : '#DACE91'} />,
      }
    }
  },
  {
    //shifting :true,
    activeColor: '#f0edf6',
    inactiveColor: '#3e2465',
    barStyle: {
      backgroundColor: '#694fad',
      paddingBottom: 5
    },

  });

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
});

export default MaterialTabbedPageNavigator;