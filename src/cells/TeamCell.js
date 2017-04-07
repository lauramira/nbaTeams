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

    this.images = {
      "WAS": "http://content.sportslogos.net/logos/6/219/thumbs/21956712016.gif",
      "CHA": "http://content.sportslogos.net/logos/6/5120/thumbs/512019262015.gif",
      "ATL": "http://content.sportslogos.net/logos/6/220/thumbs/22091682016.gif",
      "MIA": "http://content.sportslogos.net/logos/6/214/thumbs/burm5gh2wvjti3xhei5h16k8e.gif",
      "ORL": "http://content.sportslogos.net/logos/6/217/thumbs/wd9ic7qafgfb0yxs7tem7n5g4.gif",
      "NY": "http://content.sportslogos.net/logos/6/216/thumbs/2nn48xofg0hms8k326cqdmuis.gif",
      "PHI": "http://content.sportslogos.net/logos/6/218/thumbs/21870342016.gif",
      "BKN": "http://content.sportslogos.net/logos/6/3786/thumbs/hsuff5m3dgiv20kovde422r1f.gif",
      "BOS": "http://content.sportslogos.net/logos/6/213/thumbs/slhg02hbef3j1ov4lsnwyol5o.gif",
      "TOR": "http://content.sportslogos.net/logos/6/227/thumbs/22745782016.gif",
      "CHI": "http://content.sportslogos.net/logos/6/221/thumbs/hj3gmh82w9hffmeh3fjm5h874.gif",
      "CLE": "http://content.sportslogos.net/logos/6/222/thumbs/e4701g88mmn7ehz2baynbs6e0.gif",
      "IND": "http://content.sportslogos.net/logos/6/224/thumbs/3083.gif",
      "DET": "http://content.sportslogos.net/logos/6/223/thumbs/3079.gif",
      "MIL": "http://content.sportslogos.net/logos/6/225/thumbs/22582752016.gif",
      "MIN": "http://content.sportslogos.net/logos/6/232/thumbs/zq8qkfni1g087f4245egc32po.gif",
      "UTA": "http://content.sportslogos.net/logos/6/234/thumbs/23467492017.gif",
      "OKC": "http://content.sportslogos.net/logos/6/2687/thumbs/khmovcnezy06c3nm05ccn0oj2.gif",
      "POR": "http://content.sportslogos.net/logos/6/239/thumbs/bahmh46cyy6eod2jez4g21buk.gif",
      "DEN": "http://content.sportslogos.net/logos/6/229/thumbs/xeti0fjbyzmcffue57vz5o1gl.gif",
      "MEM": "http://content.sportslogos.net/logos/6/231/thumbs/793.gif",
      "HOU": "http://content.sportslogos.net/logos/6/230/thumbs/8xe4813lzybfhfl14axgzzqeq.gif",
      "NO": "http://content.sportslogos.net/logos/6/4962/thumbs/496226812014.gif",
      "SA": "http://content.sportslogos.net/logos/6/233/thumbs/827.gif",
      "DAL": "http://content.sportslogos.net/logos/6/228/thumbs/ifk08eam05rwxr3yhol3whdcm.gif",
      "GS": "http://content.sportslogos.net/logos/6/235/thumbs/qhhir6fj8zp30f33s7sfb4yw0.gif",
      "LAL": "http://content.sportslogos.net/logos/6/237/thumbs/uig7aiht8jnpl1szbi57zzlsh.gif",
      "LAC": "http://content.sportslogos.net/logos/6/236/thumbs/23654622016.gif",
      "PHO": "http://content.sportslogos.net/logos/6/238/thumbs/23843702014.gif",
      "SAC": "http://content.sportslogos.net/logos/6/240/thumbs/24040432017.gif"
    }

  }

  imageMapping(Key) {
    return this.images[Key];
  }


  render() {
    const id = this.props.id;
    const teamKey = this.props.teamKey;    
    const city = this.props.city
    const name = this.props.name;
    const conference = this.props.conference;
    const division = this.props.division;
    const image = this.props.image;
    return (
      <View style={styles.container}>
        <Image style={styles.image} source={{uri: this.imageMapping(teamKey) }} />
        <Text style={styles.title}>{city} {name}</Text>        
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
    fontSize: 15,
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
