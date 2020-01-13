import React from 'react';
import { Text, View, Dimensions, Image, Button } from 'react-native';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';

export default class LocationPage extends React.Component {
  static navigationOptions = {
    title: 'COMPASS AND GEOCODING',
  };
  constructor(props) {
    super(props);
    this.state = {
      heading: null,
      location: null,
      reverseGC: null
    }
  }

  btnHeading = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      alert('Permission to access location was denied');
    }

    let heading = await Location.getHeadingAsync({});
    this.setState({ heading });
  };

  btnLocation = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      this.setState({
        errorMessage: 'Permission to access location was denied',
      });
    }
    let location = await Location.getCurrentPositionAsync({});
    this.setState({ location });
  };

  btnReverseGC = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      this.setState({
        errorMessage: 'Permission to access location was denied',
      });
    }
    if (this.state.location) {
      let reverseGC = await Location.reverseGeocodeAsync(this.state.location.coords);
      this.setState({ reverseGC });
    } else {
      alert('You must push the Location button first in order to get the location before you can get the reverse geocode for the latitude and longitude!');
    }
  };

  render() {
    let text = 'Waiting to push the Heading button...';
    if (this.state.heading) {
      text = `magHeading:${this.state.heading.magHeading}\ntrueHeading :${this.state.heading.trueHeading}`;
    }
    let textLocation = 'Waiting to push the Location button...';
    if (this.state.location) {
      textLocation = JSON.stringify(this.state.location);
    }
    let textReverseGC = 'Waiting to push the ReverseGC... (use only after the Location button !!!)';
    if (this.state.reverseGC) {
      textReverseGC = JSON.stringify(this.state.reverseGC);
    }

    return (
      <View style={{ flex: 1, marginTop: 50, margin: 10 }}>
        <View style={{ flex: 0.2 }}>
          <Text >Compass and Geocoding Page</Text>
        </View>
        <View >
          <View style={{ padding: 10 }}>
            <View
              style={{
                margin: 10,
                flexDirection: 'row-reverse',
                alignSelf: 'center',
                //padding: 40
              }}>
              <Button title="my heading" onPress={this.btnHeading} />
            </View>
            <Text style={{ margin: 10, fontSize: 17, color: 'green' }}>{text}</Text>
            <View
              style={{
                margin: 10,
                flexDirection: 'row-reverse',
                alignSelf: 'center',
                //padding: 120
              }}>
              <Button title="my location" onPress={this.btnLocation} />
            </View>
            <Text style={{ margin: 10, fontSize: 17, color: 'green' }}>{textLocation}</Text>
            <View
              style={{
                margin: 10,
                flexDirection: 'row-reverse',
                alignSelf: 'center',
                //padding: 200
              }}>
              <Button title="location city" onPress={this.btnReverseGC} />
            </View>
            <Text style={{ margin: 10, fontSize: 17, color: 'green' }}>{textReverseGC}</Text>
          </View>
        </View>
      </View >
    );
  }
}