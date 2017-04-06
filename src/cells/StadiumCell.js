import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  Text,
  Image
} from 'react-native';

export default class stadiumCell extends Component {
  constructor(props) {
    super(props); 

  }


  render() {
    const name = this.props.name
    const city = this.props.city
    const state = this.props.state
    const zip = this.props.zip
    const address = this.props.address
    const capacity = this.props.capacity

    console.log(name)

    return (
      <View style={styles.container}>
          <Text style={styles.title}>{name}</Text>
          <Text style={styles.address}>{address + ", " + zip + ", " + city + ", " + state }</Text> 
          <Text style={styles.capacity}>Capactity: {capacity}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 5
  },
  title : {
      textAlign: 'center',
      fontWeight: "bold",
  },
  capacity: {
      textAlign: 'center'
  }
});
