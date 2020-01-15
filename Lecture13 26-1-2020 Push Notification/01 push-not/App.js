import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Notifications } from 'expo';
import registerForPushNotificationsAsync from './registerForPushNotificationsAsync';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notification: {},
    };
  }

  componentDidMount() {
    registerForPushNotificationsAsync();

    // Handle notifications that are received or selected while the app
    // is open. If the app was closed and then opened by tapping the
    // notification (rather than just tapping the app icon to open it),
    // this function will fire on the next tick after the app starts
    // with the notification data.
    this._notificationSubscription = Notifications.addListener(this._handleNotification);
  }

  _handleNotification = (notification) => {
    this.setState({ notification: notification });
  };

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Origin: {this.state.notification.origin}</Text>
        <Text>Data: {JSON.stringify(this.state.notification.data)}</Text>
        <Text>{new Date().toLocaleTimeString()}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Text: {
    color: 'blue',
    fontSize: 20,
    margin: 50
  }
});
