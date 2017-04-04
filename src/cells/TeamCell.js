import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  Text
} from 'react-native';

export default class teamsCell extends Component {
    constructor(props){
        super(props);
    }


  render() {
    const id = this.props.id;
    const teamKey = this.props.teamKey;
    const city = this.props.city
    const name = this.props.name;
    const conference = this.props.conference;
    const division = this.props.division;
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{city} {name}</Text>
        <Text style={styles.content}>{conference} - {division}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 5
  },
  title : {
    fontWeight : "bold",
    fontSize: 15,
    textAlign : "center",
    fontSize: 18,
    marginBottom: 10
  },
  content: {
    textAlign : "center",
  }
});
