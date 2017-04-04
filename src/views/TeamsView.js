import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
  ScrollView
} from 'react-native';

import TeamCell from '../cells/TeamCell';
import _ from 'underscore';

export default class teamsView extends Component {
    constructor(props){
        super(props);
        this.teams = [
            // { "TeamID": 1, "Key": "WAS",    "City": "Washington", "Name": "Wizards", "Conference": "Eastern", "Division": "Southeast" },
            // { "TeamID": 2, "Key": "CHA",    "City": "Charlotte", "Name": "Hornets", "Conference": "Eastern", "Division": "Southeast" },
            { "TeamID": 3, "Key": "ATL",    "City": "Atlanta", "Name": "Hawks", "Conference": "Eastern", "Division": "Southeast" },
            // { "TeamID": 4, "Key": "MIA",    "City": "Miami", "Name": "Heat", "Conference": "Eastern", "Division": "Southeast" },
            // { "TeamID": 5, "Key": "ORL",    "City": "Orlando", "Name": "Magic", "Conference": "Eastern", "Division": "Southeast" },
            // { "TeamID": 6, "Key": "NY",    "City": "New York", "Name": "Knicks", "Conference": "Eastern", "Division": "Atlantic" },
            // { "TeamID": 7, "Key": "PHI",    "City": "Philadelphia", "Name": "76ers", "Conference": "Eastern", "Division": "Atlantic" },
            { "TeamID": 8, "Key": "BKN",    "City": "Brooklyn", "Name": "Nets", "Conference": "Eastern", "Division": "Atlantic" },
            { "TeamID": 9, "Key": "BOS",    "City": "Boston", "Name": "Celtics", "Conference": "Eastern", "Division": "Atlantic" },
            // { "TeamID": 10, "Key": "TOR",    "City": "Toronto", "Name": "Raptors", "Conference": "Eastern", "Division": "Atlantic" },
            // { "TeamID": 11, "Key": "CHI",    "City": "Chicago", "Name": "Bulls", "Conference": "Eastern", "Division": "Central" },
            // { "TeamID": 12, "Key": "CLE",    "City": "Cleveland", "Name": "Cavaliers", "Conference": "Eastern", "Division": "Central" },
            // { "TeamID": 13, "Key": "IND",    "City": "Indiana", "Name": "Pacers", "Conference": "Eastern", "Division": "Central" },
            // { "TeamID": 14, "Key": "DET",    "City": "Detroit", "Name": "Pistons", "Conference": "Eastern", "Division": "Central" },
            // { "TeamID": 15, "Key": "MIL",    "City": "Milwaukee", "Name": "Bucks", "Conference": "Eastern", "Division": "Central" },
            // { "TeamID": 16, "Key": "MIN",    "City": "Minnesota", "Name": "Timberwolves", "Conference": "Western", "Division": "Northwest" },
            // { "TeamID": 17, "Key": "UTA",    "City": "Utah", "Name": "Jazz", "Conference": "Western", "Division": "Northwest" },
            // { "TeamID": 18, "Key": "OKC",    "City": "Oklahoma City", "Name": "Thunder", "Conference": "Western", "Division": "Northwest" },
            // { "TeamID": 19, "Key": "POR",    "City": "Portland", "Name": "Trail Blazers", "Conference": "Western", "Division": "Northwest" },
            // { "TeamID": 20, "Key": "DEN",    "City": "Denver", "Name": "Nuggets", "Conference": "Western", "Division": "Northwest" },
            // { "TeamID": 21, "Key": "MEM",    "City": "Memphis", "Name": "Grizzlies", "Conference": "Western", "Division": "Southwest" },
            // { "TeamID": 22, "Key": "HOU",    "City": "Houston", "Name": "Rockets", "Conference": "Western", "Division": "Southwest" },
            // { "TeamID": 23, "Key": "NO",    "City": "New Orleans", "Name": "Pelicans", "Conference": "Western", "Division": "Southwest" },
            // { "TeamID": 24, "Key": "SA",    "City": "San Antonio", "Name": "Spurs", "Conference": "Western", "Division": "Southwest" },
            // { "TeamID": 25, "Key": "DAL",    "City": "Dallas", "Name": "Mavericks", "Conference": "Western", "Division": "Southwest" },
            // { "TeamID": 26, "Key": "GS",    "City": "Golden State", "Name": "Warriors", "Conference": "Western", "Division": "Pacific" },
            // { "TeamID": 27, "Key": "LAL",    "City": "Los Angeles", "Name": "Lakers", "Conference": "Western", "Division": "Pacific" },
            // { "TeamID": 28, "Key": "LAC",    "City": "Los Angeles", "Name": "Clippers", "Conference": "Western", "Division": "Pacific" },
            // { "TeamID": 29, "Key": "PHO",    "City": "Phoenix", "Name": "Suns", "Conference": "Western", "Division": "Pacific" },
            // { "TeamID": 30, "Key": "SAC",    "City": "Sacramento", "Name": "Kings", "Conference": "Western", "Division": "Pacific"}
        ]
    }


  render() {
    return (
      <View style={styles.container}>
        <ScrollView >
        {
            _.map(this.teams, (team) => {
                return (
                    <TouchableHighlight style={styles.touchableTeam} key={team.TeamID}>
                        <View key={team.TeamID}>
                            <TeamCell
                                key={team.TeamID}                            
                                teamKey = {team.Key}
                                city = {team.City}
                                name = {team.Name}
                                conference = {team.Conference}
                                division = {team.Division}
                                image = {require('../assets/logos/ATL.gif')}
                                />
                        </View>
                    </TouchableHighlight>
                )
            })
        }
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  touchableTeam: {    
    borderStyle : "solid",
    borderColor: "gray",
    borderRadius: 8,
    borderWidth : 2,
    padding: 15,
    margin: 10,
    backgroundColor: "white"
  }
});
