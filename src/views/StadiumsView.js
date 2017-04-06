import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  Text,
  ActivityIndicator
} from 'react-native';

import Header from '../common/Header';
import BottomBar from '../common/BottomBar';
import _ from 'underscore';
import MapView from 'react-native-maps';

export default class stadiumView extends Component {
    state = { stadiums: [], loading: true }

    constructor(props){
        super(props);
    }

    async componentWillMount() {
      const uri = 'http://lmira.lasalle.ovh/api/stadiums';
      try {
        const response = await fetch(uri);
        const jsonData = await response.json();
        this.setState({ loading: false , stadiums: jsonData});
      
      } catch(e) {
        console.log(e);
      } 
    }


  render() {
    const navigator = this.props.navigator;

    const { stadiums, loading, error } = this.state;
    if (loading) {
      return <ActivityIndicator style={styles.loading} />
    }  

    return (
      <View style={styles.container}>
        <Header label="MAP"/>
        <View style={styles.container}>
            <MapView
              style={styles.map}
              region={{
                  latitude: 35.043021,
                  longitude: -97.2690242,
                  latitudeDelta: 35.015,
                  longitudeDelta: 60.0121,
              }}>
              {this.state.stadiums.map(stadium => {
                return (
                    <MapView.Marker
                      coordinate={{latitude: stadium.latitude, longitude: stadium.longitude}}
                      key={stadium.StadiumID}
                    />
                );
                })}
          </MapView>
          <View style={styles.detailView}><Text>NBA STADIUMS</Text></View>
        </View>
        <BottomBar navigator={navigator}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  map: {
    flex: 2
  },
  detailView: {
    flex: 1,
    alignItems: 'center'
  }
});
