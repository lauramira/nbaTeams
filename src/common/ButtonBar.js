import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Image,
  Text,
  View,
  TouchableHighlight
} from 'react-native';

export default class ButtonBar extends Component {

  render() {
    const image = this.props.image;
    const title = this.props.title;
    const navigator = this.props.navigator;
    const page = this.props.page;
    
    return (

      <TouchableHighlight style={styles.container}
        onPress={() => navigator.replace({ name: page })}>
      <View style={styles.view}>
        <Image source={image} style={styles.images}/>
        <Text style={styles.text}>{title}</Text>
      </View>
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  container: {
     flex:1        
  },
  view: {     
     flex: 1,     
     alignItems: 'center',
     padding: 5
  },
  images: {
      width: 72,
      height: 50
  },
  text: {
    color: 'white'
  }
})