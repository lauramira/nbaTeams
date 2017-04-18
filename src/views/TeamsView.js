import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View, 
  TouchableHighlight,
  ListView,
  Dimensions,
  ActivityIndicator,
  NetInfo,
  AsyncStorage
} from 'react-native';

import TeamCell from '../cells/TeamCell';
import Header from '../common/Header';
import BottomBar from '../common/BottomBar';
import ConnectionErrorView from '../common/ConnectionErrorView';
import _ from 'underscore';

export default class teamsView extends Component {
  state = { teams: [], loading: false, connection: "" }

    constructor(props){
        super(props); 

        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
          teams: ds.cloneWithRows([]),
          loading: false,
          connection: ""
      }
    }

    networkStateChanged(reach){
      this.setState({ connection: reach });
      const connection = this.state.connection;

      if ((connection.toUpperCase() == 'WIFI' || connection.toUpperCase() == 'MOBILE') 
      && this.state.teams.getRowCount() == 0){
         this.setState({ loading: true});
         this.getTeams();
      }
    }

    async componentWillMount() {

      try {
          const teamsString = await AsyncStorage.getItem('NbaTeams:teams');
          const teams = JSON.parse(teamsString);
          if (teams && teams.length > 0){
            const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
             this.setState({ teams: ds.cloneWithRows(teams)})
          } else {
             NetInfo.addEventListener(
              'change', reach => this.networkStateChanged(reach)
            );
          }
         
        } catch(e) {
          console.log(e);
        }
    }


  render() {

    const navigator = this.props.navigator;
    const { teams, loading, connection} = this.state;

    return (
        <View style={styles.container}>

          { this.state.teams.getRowCount() == 0 && connection.toUpperCase() === 'NONE' && <ConnectionErrorView />}

          {loading && <ActivityIndicator style={styles.loading} /> }

          {!loading && this.state.teams.getRowCount() > 0 &&
          <View>
            <Header label="TEAMS"/>
            <View style={styles.listContainer}>
              <ListView style={styles.list}
              contentContainerStyle={styles.contentList}
              dataSource={this.state.teams}
              enableEmptySections={true}
              renderRow={(team) => this.renderListViewItem(team) }
              />
           </View>
           <BottomBar navigator={navigator}/>
        </View>
          }
      </View>
    );
  }


  //METHODS
  async getTeams(){
      const uri = 'http://lmira.lasalle.ovh/api/teams';

      try {
        const response = await fetch(uri);
        const jsonData = await response.json();
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.setState({ loading: false , teams: ds.cloneWithRows(jsonData)})

        const teams = this.state.teams;
        await AsyncStorage.setItem('NbaTeams:teams', JSON.stringify(jsonData));

      } catch(e) {
        console.log(e);
      }   
    }

    renderListViewItem(team){
    return (
      <TouchableHighlight
        style={styles.touchableTeam} 
        key={team.TeamID}
        onPress={() => this.props.navigator.push({ name: 'teamDetailView', data: team})}>
          <View key={team.TeamID}>
            <TeamCell key={team.TeamID} team={team} />
         </View>
      </TouchableHighlight>
      )
    }
}

const styles = StyleSheet.create({
  container: {    
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#002244'
  },
  contentList : {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center'
  },
  touchableTeam: {    
    borderStyle : "solid",
    borderColor: "white",
    borderRadius: 8,
    borderWidth : 2,
    padding: 15,
    margin: 10,
    width: 140,
    height: 140,
    backgroundColor: "white"   
  },
  listContainer: {
    flex: 1,
    flexDirection:'row', 
    justifyContent:'center',
    padding: 10
  }
}); 