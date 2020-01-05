import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Details extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.myText}>Details</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    myText: {
      fontSize: 30,
      color:"green",
      borderRadius:5,
      padding:15,
      fontStyle:"italic",
      fontWeight:"700"
    }
  });
  