import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';



export default class TabbedAlternatePage extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={{ color: 'red', fontSize: 28, margin: 15 }}>tabbed Alternate Page!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
});
