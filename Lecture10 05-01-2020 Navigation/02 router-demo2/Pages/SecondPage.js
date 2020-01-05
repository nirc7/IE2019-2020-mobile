import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';


export default class SecondPage extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={{ color: 'red', fontSize: 28, margin: 15 }}>second Page!</Text>
        <TouchableOpacity onPress={() => {
            this.props.navigation.navigate('FirstPage');
          }}>
            <Text style={{ color: 'blue', fontSize: 28, margin: 15, borderColor: "black", borderWidth: 2, borderRadius: 15, padding: 15, backgroundColor: "lightgrey" }} >
              Goto First Page!</Text>
          </TouchableOpacity>
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
