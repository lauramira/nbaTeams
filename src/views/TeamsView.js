import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
  ListView,
  Dimensions,
  ActivityIndicator
} from 'react-native';

import TeamCell from '../cells/TeamCell';
import Header from '../common/Header';
import BottomBar from '../common/BottomBar';
import _ from 'underscore';

export default class teamsView extends Component {
  state = { teams: [], loading: true }

    constructor(props){
        super(props);
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
          teams: ds.cloneWithRows([]),
          loading: true
      }
    }

    async componentWillMount() {
      const uri = 'http://lmira.lasalle.ovh/api/teams';

      try {
        const response = await fetch(uri);
        const jsonData = await response.json();

        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.setState({ loading: false , teams: ds.cloneWithRows(jsonData)})
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

  render() {

    const navigator = this.props.navigator;
    const { teams, loading } = this.state;

    if (loading) {
      return <ActivityIndicator/>
    }   

    return (
        <View style={styles.container}>
        <Header label="TEAMS"/>
        <View style={styles.listContainer}>
        <ListView style={styles.list}
          contentContainerStyle={styles.contentList}
          dataSource={this.state.teams}
          enableEmptySections={true}
          renderRow={(team) => 
            this.renderListViewItem(team)
          }
         />
         </View>
        
        <BottomBar navigator={navigator}/>
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