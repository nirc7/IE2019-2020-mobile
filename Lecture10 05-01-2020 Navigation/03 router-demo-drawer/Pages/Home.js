import React from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';

export default class Home extends React.Component {
  // static navigationOptions = {
  //   drawerLabel: 'Home',
  //   drawerIcon: ({ tintColor }) => (
  //     <Image
  //       source={require('../assets/icon.png')}
  //       style={[styles.icon, {tintColor: tintColor}]}
  //     />
  //   ),
  // };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.myText}>Home3</Text>
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
  