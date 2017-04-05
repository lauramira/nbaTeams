import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Dimensions
} from 'react-native';

import ButtonBar from './ButtonBar';
import _ from 'underscore';

export default class BottomBar extends Component {
   constructor(props) {
        super(props);        
        this.bottomBarButtons = [
            { id: 1, title: "Teams", page: "teamsView", image: require('../assets/icons/teams.jpeg')},
            { id: 2, title: "Map", page: "mapView", image: require('../assets/icons/teams.jpeg')}           
        ];
    }


  render() {
    const navigator = this.props.navigator;

    return (
      <View style={styles.container}>
        {
          _.map(this.bottomBarButtons, (button) => {
              return (
               <ButtonBar 
                  key={button.id} 
                  title={button.title} 
                  page={button.page}
                  navigator={navigator}/>                    
              )
          })
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 80,    
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',    
    width: Dimensions.get('window').width,
    backgroundColor: 'green'    
  }
})