/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Navigator,
  View
} from 'react-native';

import TeamsView from './src/views/TeamsView';
import MapView from './src/views/MapView';

var ROUTES = {
  teamsView: TeamsView,
  mapView : MapView
}

export default class nbaTeams extends Component {

  renderScene(route, navigator) {
    var Component = ROUTES[route.name]
    return <Component route={route} navigator={navigator} />
  }

  render() {
    return (
      <View style={styles.container}>
        <Navigator
          style={styles.container}
          initialRoute={{ name: 'teamsView' }}
          renderScene={this.renderScene}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

AppRegistry.registerComponent('nbaTeams', () => nbaTeams);
