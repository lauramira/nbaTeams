import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  Text,
  ActivityIndicator,
  Image,
  Dimensions
} from 'react-native';

import Header from '../common/Header';
import BottomBar from '../common/BottomBar';
import _ from 'underscore';
import MapView from 'react-native-maps';
import StadiumCell from '../cells/StadiumCell';

export default class stadiumView extends Component {
    state = { stadiums: [], loading: true, stadiumSelected : {}, anyStadiumSelected: false}

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

    thereIsStadiumSelected() {
      if (!this.state.anyStadiumSelected){
        return <Image style={styles.mapImage} source={ require("../assets/nba.png")}/>
      } else {
        const stadium = this.state.stadiumSelected;
        return <StadiumCell 
              name={stadium.Name}
              city={stadium.City}
              zip={stadium.Zip}
              address={stadium.Address}
              state={stadium.State}
              capacity={stadium.Capacity}
              stadiumId={stadium.StadiumID}
              />
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
        <Header label="STADIUMS"/>
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
                      onPress={()=> this.setState({ stadiumSelected: stadium, anyStadiumSelected: true})}
                    />
                );
                })}
          </MapView>
          <View style={styles.detailView}>
            { this.thereIsStadiumSelected() }
          </View>
        </View>
        <BottomBar navigator={navigator}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#002244',
  },
  map: {
    flex: 2,
    margin: 5
  },
  detailView: {
    flex: 1,
    alignItems: 'center'
  },
  mapImage: {
    width: 300,
    resizeMode: 'stretch',
    height: 180
  }
});
