import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Image,
  Text,
  View,
  TouchableHighlight,
  Dimensions
} from 'react-native';

export default class ButtonBar extends Component {

  render() {
    
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={require('../assets/wifi.png')}/>
            <Text>No internet connection</Text>
        </View>
    
    )
  }
}

const styles = StyleSheet.create({
  container: {
     flex:1,
     alignItems: 'center',
     backgroundColor: 'white',
     justifyContent: 'center',
     width: Dimensions.get('window').width
  },
  image: {
    width: 80,
    height: 80,
    margin: 10
  }
})