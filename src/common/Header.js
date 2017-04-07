import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Dimensions,
} from 'react-native';

export default class Header extends Component {
  render() {

    const label = this.props.label;

    return (
      <View style={styles.container}>
        <Text style={styles.label}>{label}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  label: {    
    fontSize: 18,
    width: Dimensions.get('window').width,
    textAlign: 'center',
    padding: 15,
    marginTop: 20,
    textAlignVertical: 'center',
    backgroundColor: '#8996A0',
    color: 'white'
  }
})
