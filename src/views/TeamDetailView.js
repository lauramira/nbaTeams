import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  Text,
  ListView,
  Image
} from 'react-native';

import Header from '../common/Header';

export default class teamDetailView extends Component {

  state = { players: [], loading: true }

  constructor(props){
    super(props);
    this.teamPlayersArray =[
      {
          "Jersey": 13,
          "PositionCategory": "C",
          "Position": "C",
          "FirstName": "Marcin",
          "LastName": "Gortat",
          "Height": 83,
          "Weight": 240,
          "BirthDate": "1984-02-17T00:00:00",
          "PhotoUrl": "http://static.fantasydata.com/headshots/nba/low-res/20000440.png"
        },
        {
          "Jersey": 3,
          "PositionCategory": "G",
          "Position": "SG",
          "FirstName": "Bradley",
          "LastName": "Beal",
          "Height": 77,
          "Weight": 207,
          "BirthDate": "1993-06-28T00:00:00",
          "PhotoUrl": "http://static.fantasydata.com/headshots/nba/low-res/20000441.png"
        },
        {
          "Jersey": 2,
          "PositionCategory": "G",
          "Position": "PG",
          "FirstName": "John",
          "LastName": "Wall",
          "Height": 76,
          "Weight": 210,
          "BirthDate": "1990-09-06T00:00:00",
          "PhotoUrl": "http://static.fantasydata.com/headshots/nba/low-res/20000442.png"
        },
        {
          "Jersey": 22,
          "PositionCategory": "F",
          "Position": "SF",
          "FirstName": "Otto",
          "LastName": "Porter",
          "Height": 80,
          "Weight": 198,
          "BirthDate": "1993-06-03T00:00:00",
          "PhotoUrl": "http://static.fantasydata.com/headshots/nba/low-res/20000443.png"
        },
        {
          "Jersey": 44,
          "PositionCategory": "G",
          "Position": "SG",
          "FirstName": "Bojan",
          "LastName": "Bogdanovic",
          "Height": 80,
          "Weight": 225,
          "BirthDate": "1989-04-18T00:00:00",
          "PhotoUrl": "http://static.fantasydata.com/headshots/nba/low-res/20000591.png"
        },
        {
          "Jersey": 28,
          "PositionCategory": "C",
          "Position": "C",
          "FirstName": "Ian",
          "LastName": "Mahinmi",
          "Height": 83,
          "Weight": 262,
          "BirthDate": "1986-11-05T00:00:00",
          "PhotoUrl": "http://static.fantasydata.com/headshots/nba/low-res/20000737.png"
        },
        {
          "Jersey": 14,
          "PositionCategory": "F",
          "Position": "PF",
          "FirstName": "Jason",
          "LastName": "Smith",
          "Height": 84,
          "Weight": 240,
          "BirthDate": "1986-03-02T00:00:00",
          "PhotoUrl": "http://static.fantasydata.com/headshots/nba/low-res/20000790.png"
        },
        {
          "Jersey": 7,
          "PositionCategory": "G",
          "Position": "PG",
          "FirstName": "Brandon",
          "LastName": "Jennings",
          "Height": 73,
          "Weight": 170,
          "BirthDate": "1989-09-23T00:00:00",
          "PhotoUrl": "http://static.fantasydata.com/headshots/nba/low-res/20000812.png"
        },
        {
          "Jersey": 33,
          "PositionCategory": "G",
          "Position": "PG",
          "FirstName": "Trey",
          "LastName": "Burke",
          "Height": 73,
          "Weight": 191,
          "BirthDate": "1992-11-12T00:00:00",
          "PhotoUrl": "http://static.fantasydata.com/headshots/nba/low-res/20000836.png"
        },
        {
          "Jersey": 5,
          "PositionCategory": "F",
          "Position": "PF",
          "FirstName": "Markieff",
          "LastName": "Morris",
          "Height": 82,
          "Weight": 245,
          "BirthDate": "1989-09-02T00:00:00",
          "PhotoUrl": "http://static.fantasydata.com/headshots/nba/low-res/20000848.png"
        },
        {
          "Jersey": 12,
          "PositionCategory": "F",
          "Position": "SF",
          "FirstName": "Kelly",
          "LastName": "Oubre Jr.",
          "Height": 79,
          "Weight": 205,
          "BirthDate": "1995-12-09T00:00:00",
          "PhotoUrl": "http://static.fantasydata.com/headshots/nba/low-res/20001393.png"
        },
        {
          "Jersey": 1,
          "PositionCategory": "F",
          "Position": "PF",
          "FirstName": "Chris",
          "LastName": "McCullough",
          "Height": 81,
          "Weight": 215,
          "BirthDate": "1995-02-05T00:00:00",
          "PhotoUrl": "http://static.fantasydata.com/headshots/nba/low-res/20001409.png"
        },
        {
          "Jersey": 9,
          "PositionCategory": "G",
          "Position": "SG",
          "FirstName": "Sheldon",
          "LastName": "Mcclellan",
          "Height": 78,
          "Weight": 200,
          "BirthDate": "1992-12-21T00:00:00",
          "PhotoUrl": "http://static.fantasydata.com/headshots/nba/low-res/20001738.png"
        },
        {
          "Jersey": 31,
          "PositionCategory": "G",
          "Position": "SG",
          "FirstName": "Tomas",
          "LastName": "Satoransky",
          "Height": 79,
          "Weight": 210,
          "BirthDate": "1991-10-30T00:00:00",
          "PhotoUrl": "http://static.fantasydata.com/headshots/nba/low-res/20001749.png"
        },
        {
          "Jersey": 32,
          "PositionCategory": "F",
          "Position": "PF",
          "FirstName": "Daniel",
          "LastName": "Ochefu",
          "Height": 83,
          "Weight": 245,
          "BirthDate": "1993-12-15T00:00:00",
          "PhotoUrl": "http://static.fantasydata.com/headshots/nba/low-res/20001755.png"
        }
    ]
    
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
      this.state.players = this.teamPlayersArray;
      this.state = {
        players: ds.cloneWithRows(this.state.players ),
        loading: false
      }
  }


  render() {

    const team = this.props.route.data;
    console.log(this.state.players)

    return (
      <View style={styles.container}>
        <Header label={team.City + " " + team.Name} />
        <View style={styles.dataView}>
            <ListView style={styles.list}
              contentContainerStyle={styles.contentList}
              dataSource={this.state.players}
              enableEmptySections={true}
              renderRow={(player) => 
                <View style={styles.viewContainer}>
                  <View style={styles.secondViewContainer}>
                  <Image style={styles.image} source={{uri: player.PhotoUrl}}/>
                  <Text style={styles.title}>{player.FirstName} {player.LastName}</Text>
                  <Text># {player.Jersey}</Text>
                  </View>
                  </View>
              }
            />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  dataView : {
    flex: 1,
    backgroundColor: 'yellow'
  },
  image: {
    padding: 10,
    height: 90,
    width: 90,
    borderRadius: 45,
    backgroundColor: 'white',
    marginTop: 5,
    borderColor: 'gray',
    borderWidth : 1
  },
  contentList : {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginLeft: 25,
    alignItems: 'center'
    
  },
  title: {
    fontWeight: "bold",
    fontSize: 15,
    textAlign: "center",
    paddingBottom: 10,
    paddingTop: 10
  },
  viewContainer :{
    borderStyle : "solid",
    borderColor: "gray",
    borderRadius: 8,
    borderWidth : 2,
    padding: 5,
    margin: 5,
    width: 150,
    height: 200,
    backgroundColor: "white",
    alignItems: 'center' 
  },
  secondViewContainer: {
    borderStyle : "solid",
    borderColor: "#D0103A",
    borderRadius: 8,
    borderWidth : 2,
    paddingLeft: 15,
    paddingRight: 15,
    height: 185,
    width: 140,
    backgroundColor: 'gray',
    alignItems: 'center' 
  }
});
