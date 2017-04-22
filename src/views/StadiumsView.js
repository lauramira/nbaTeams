import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  Text,
  ActivityIndicator,
  Image,
  Dimensions,
  ScrollView,
  NetInfo,
  AsyncStorage
} from 'react-native';

import Header from '../common/Header';
import BottomBar from '../common/BottomBar';
import _ from 'underscore';
import MapView from 'react-native-maps';
import StadiumCell from '../cells/StadiumCell';
import ConnectionErrorView from '../common/ConnectionErrorView';

export default class stadiumView extends Component {
    state = { stadiums: [], 
      loading: false, 
      stadiumSelected : {}, 
      anyStadiumSelected: false,
      connection: "" }

    constructor(props){
        super(props);

        NetInfo.fetch().done((reach) => {
          this.setState({connection: reach});
          if ((reach.toUpperCase() == 'WIFI' || reach.toUpperCase() == 'MOBILE') 
            && this.state.stadiums.length == 0){
                this.setState({ loading: true});
                this.getStadiums();
            }
        });
    }

    thereIsStadiumSelected() {
      if (!this.state.anyStadiumSelected){
        return <Image style={styles.mapImage} source={ require("../assets/nba.png")}/>
      } else {
        const stadium = this.state.stadiumSelected;
        return <StadiumCell stadium={stadium}/>
      }
    }

  render() {
    const navigator = this.props.navigator;

    const { stadiums, loading, error, connection } = this.state; 

    return (
      <View style={styles.container}>

        { this.state.stadiums.length == 0 && connection.toUpperCase() === 'NONE' && <ConnectionErrorView />}

        {loading && <ActivityIndicator style={styles.loading} /> }

         {!loading && this.state.stadiums.length > 0 &&
          <View style={styles.container}>
            <Header label="STADIUMS"/>
              <View style={styles.mapContainer}>
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
         }
      </View>
    );
  }

  //METHODS
  networkStateChangedStadium(reach){
    this.setState({ connection: reach });
    const connection = this.state.connection;

    if ((connection.toUpperCase() == 'WIFI' || connection.toUpperCase() == 'MOBILE') 
    && this.state.stadiums.length == 0){
        this.setState({ loading: true});
        this.getStadiums();
    }
  }

  async componentWillMount() {
    try {
        const stadiumsString = await AsyncStorage.getItem('NbaTeams:stadiums');
        const stadiums = JSON.parse(stadiumsString);
        if (stadiums && stadiums.length > 0){
            this.setState({ stadiums: stadiums})
        } else {
            NetInfo.addEventListener(
            'change', reach => this.networkStateChangedStadium(reach)
          );
        }       
      } catch(e) {
        console.log(e);
      }
  }

  componentWillUnmount() { 
      NetInfo.removeEventListener( 
        'change',  (reach) => this.networkStateChangedStadium(reach) 
    ); 
  }

  async getStadiums(){
      const uri = 'http://lmira.lasalle.ovh/api/stadiums';
      try {
        const response = await fetch(uri);
        const jsonData = await response.json();
        this.setState({ loading: false , stadiums: jsonData});

        await AsyncStorage.setItem('NbaTeams:stadiums', JSON.stringify(jsonData));
      
      } catch(e) {
        console.log(e);
      } 
    }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#002244',
    height: Dimensions.get('window').height
  },
  map: {
    flex: 2,
    width: Dimensions.get('window').width
  },
  detailView: {
    flex: 1,
    alignItems: 'center'
  },
  mapContainer: {
     flex: 1,
     margin: 5
  },
  mapImage: {
    width: 300,
    resizeMode: 'stretch',
    height: 180
  }
});
