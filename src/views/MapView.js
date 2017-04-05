import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  Text
} from 'react-native';

import Header from '../common/Header';
import BottomBar from '../common/BottomBar';
import _ from 'underscore';
import MapView from 'react-native-maps';

export default class teamsView extends Component {
    constructor(props){
        super(props);
    }


  render() {
    const navigator = this.props.navigator;

    return (
      <View style={styles.container}>
        <Header label="MAP"/>
        <View style={styles.container}>
            <MapView
          style={styles.map}
          region={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}>
        </MapView>
        </View>
        <BottomBar navigator={navigator}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  }
});
