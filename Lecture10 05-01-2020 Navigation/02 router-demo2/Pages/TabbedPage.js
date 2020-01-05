import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

import { createBottomTabNavigator } from 'react-navigation-tabs';

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

const TabbedPageNavigator = createBottomTabNavigator(
  {
    Tabbed_Page: TabbedPage,
    TabbedAlternatePage: TabbedAlternatePage,
    'Tabbed Second Alternate Page': TabbedSecondAlternatePage
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Tabbed_Page') {
          iconName = `add-circle${focused ? '' : '-outline'}`;
        } else if (routeName === 'TabbedAlternatePage') {
          iconName = `ios-options${focused ? '' : '-outline'}`;
        }

        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        return <Ionicons name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
      labelStyle :{fontSize:15}
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

export default TabbedPageNavigator;