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
    const stadium = this.props.stadium;

    return (
      <View style={styles.container}>
          <Image style={styles.image} source={{uri: stadium.url }} />
          <Text style={styles.title}>{stadium.Name}</Text>
          <Text style={styles.address}>{stadium.Address + ", " + stadium.Zip + ", " + stadium.City + ", " + stadium.State }</Text> 
          <Text style={styles.capacity}>Capactity: {stadium.Capacity}</Text>
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
      color: 'white'
  },
  capacity: {
      textAlign: 'center',
      color: 'white'
  },
  address: {
      textAlign: 'center',
      color: 'white'
  },
  image: {
    width: 110,
    height: 80,
    borderRadius: 4,
    marginBottom: 10
  }
});
