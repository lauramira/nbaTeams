import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  Text,
  ListView,
  Image,
  TouchableHighlight,
  TouchableOpacity
} from 'react-native';

import Header from '../common/Header';
import Modal from 'react-native-modal';

export default class teamDetailView extends Component {

  constructor(props){
    super(props);
    this.playerInfoKeys = ["Jersey", "Position", "Height", "Weight", "Birth Date"]
  }

  render() {

    const index = this.props.index;
    const value = this.props.value;

    return (
      <View style={styles.container}>
        <Text style={styles.leftText}>{this.playerInfoKeys[index]}</Text>
        <Text style={styles.rightText}>{value}</Text>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  leftText: {
    flex: 1,
    textAlign:'center'
  },
  rightText: {
    flex: 1,
    textAlign:'center'
  }
});
