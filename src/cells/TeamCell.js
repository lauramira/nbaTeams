import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  Text,
  Image
} from 'react-native';

export default class teamsCell extends Component {
  constructor(props) {
    super(props);

  }


  render() {
    const team = this.props.team;

    return (
      <View style={styles.container}>
        <Image style={styles.image} source={{uri: team.url }} />
        <Text style={styles.title}>{team.City} {team.Name}</Text>        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 5
  },
  title: {
    fontWeight: "bold",
    fontSize: 13,
    textAlign: "center",
    paddingBottom: 10,
    paddingTop: 10
  },
  content: {
    textAlign: "center"
  },
  image: {
    padding: 10,
    height: 50,
    width: 75
  }
});
