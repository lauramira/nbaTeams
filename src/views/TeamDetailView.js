import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  Text,
  ListView,
  Image,
  TouchableHighlight,
  TouchableOpacity,
  ActivityIndicator
} from 'react-native';

import Header from '../common/Header';
import PlayerInfoKeyValue from '../cells/PlayerInfoKeyValue';
import Modal from 'react-native-modal';

export default class teamDetailView extends Component {

  state = { players: [], loading: true, isModalVisible: false, selectedPlayer: null }

  async componentWillMount() {
    const uri = 'https://api.fantasydata.net/v3/nba/stats/JSON/Players/' + this.props.route.data.Key;
    const request = new Request(uri, {
      headers: new Headers({
        "Ocp-Apim-Subscription-Key" : "11a0a6437f5843aeb9dfef82f0b3670b"
      })
    });
    try {
        const response = await fetch(request);
        const jsonData = await response.json();
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.setState({ loading: false , players: ds.cloneWithRows(jsonData)})
      } catch(e) {
        console.log(e);
      }
    }

  constructor(props){
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
          players: ds.cloneWithRows([]),
          loading: true
      }
  }

   _renderButton = (text, onPress) => (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>{text}</Text>
      </View>
    </TouchableOpacity>
  );

  showPlayerDetail = (player) => {
    this.setState({ selectedPlayer: player , isModalVisible: true})
  }

  getDateFormat(date) {
    return date.split("T")[0];
  }

  _renderModalContent = (selectedPlayer) => (
    <View >
      {selectedPlayer && <View style={styles.modalContent}>
        <Text style={styles.title}>{selectedPlayer.FirstName + " " + selectedPlayer.LastName}</Text>
        <PlayerInfoKeyValue index={0} value={"#" + selectedPlayer.Jersey} />
        <PlayerInfoKeyValue index={1} value={selectedPlayer.Position} />
        <PlayerInfoKeyValue index={2} value={selectedPlayer.Height} />
        <PlayerInfoKeyValue index={3} value={selectedPlayer.Weight} />
        <PlayerInfoKeyValue index={4} value={this.getDateFormat(selectedPlayer.BirthDate)} />
        {this._renderButton('Close', () => this.setState({ isModalVisible: false }))}
      </View>}
    </View>
  );
  
renderPlayerView(player){
  return (
    <TouchableHighlight
      key={player.PlayerID}
      onPress={() => this.showPlayerDetail(player)}>
        <View style={styles.viewContainer} >
          <Image style={styles.image} source={{uri: player.PhotoUrl}}/>
          <Text style={styles.title}>{player.FirstName} {player.LastName}</Text>
        </View>
    </TouchableHighlight>
  )
}

  render() {

    const { players, loading } = this.state;
    const team = this.props.route.data;
    
    const navigator = this.props.navigator;

    if (loading) {
      return <ActivityIndicator/>
    }
    

    return (
      <View style={styles.container}>
        <Header label={team.City + " " + team.Name} hasBackButton={true} navigator={navigator}/>
        <View style={styles.dataView}>
            <ListView
              contentContainerStyle={styles.contentList}
              dataSource={this.state.players}
              enableEmptySections={true}
              renderRow={(player) => 
                this.renderPlayerView(player)
              }
            />
        </View>
        <Modal isVisible={this.state.isModalVisible}>
          {this._renderModalContent(this.state.selectedPlayer)}
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#002244'
  },
  dataView : {
    flex: 1,
    flexDirection:'row', 
    justifyContent:'center',
    padding: 10
  },
  image: {
    height: 80,
    width: 80,
    backgroundColor: 'white',
    marginTop: 5,
    justifyContent: 'center'
  },
  contentList : {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center'
    
  },
  title: {
    fontWeight: "bold",
    fontSize: 12,
    marginBottom: 10,
    marginTop: 10
  },
  viewContainer :{
    borderStyle : "solid",
    borderWidth : 2,
    margin: 5,
    width: 110,
    height: 130,
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 6
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 22,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
  button: {
    backgroundColor: '#002244',
    padding: 12,
    margin: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
  buttonText: {
    color: 'white',
  }
});
