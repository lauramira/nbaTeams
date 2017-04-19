import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  Text
} from 'react-native';

import PlayerInfoKeyValue from '../cells/PlayerInfoKeyValue';

export default class teamDetailView extends Component {

  getDateFormat(date) {
    return date.split("T")[0];
  }
  
  render() {
    
    const selectedPlayer = this.props.selectedPlayer;

    return (
        <View style={styles.modalContent}>
            <Text style={styles.title}>{selectedPlayer.FirstName + " " + selectedPlayer.LastName}</Text>
            <PlayerInfoKeyValue index={0} value={"#" + selectedPlayer.Jersey} />
            <PlayerInfoKeyValue index={1} value={selectedPlayer.Position} />
            <PlayerInfoKeyValue index={2} value={selectedPlayer.Height} />
            <PlayerInfoKeyValue index={3} value={selectedPlayer.Weight} />
            <PlayerInfoKeyValue index={4} value={this.getDateFormat(selectedPlayer.BirthDate)} />
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  title: {
    fontWeight: "bold",
    fontSize: 12,
    marginBottom: 10,
    marginTop: 10
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 22,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
});
