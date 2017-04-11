import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  Text,
  Image
} from 'react-native';

export default class stadiumCell extends Component {
  constructor(props) {
    super(props); 
    this.images = {
      "1" : "http://content.sportslogos.net/logos/6/219/thumbs/21956712016.gif",
      "2": "http://content.sportslogos.net/logos/6/5120/thumbs/512019262015.gif",
      "3": "http://content.sportslogos.net/logos/6/220/thumbs/22091682016.gif",
      "4": "http://content.sportslogos.net/logos/6/214/thumbs/burm5gh2wvjti3xhei5h16k8e.gif",
      "5": "http://content.sportslogos.net/logos/6/217/thumbs/wd9ic7qafgfb0yxs7tem7n5g4.gif",
      "6": "http://content.sportslogos.net/logos/6/216/thumbs/2nn48xofg0hms8k326cqdmuis.gif",
      "7": "http://content.sportslogos.net/logos/6/218/thumbs/21870342016.gif",
      "8": "http://content.sportslogos.net/logos/6/3786/thumbs/hsuff5m3dgiv20kovde422r1f.gif",
      "9": "http://content.sportslogos.net/logos/6/213/thumbs/slhg02hbef3j1ov4lsnwyol5o.gif",
      "10": "http://content.sportslogos.net/logos/6/227/thumbs/22745782016.gif",
      "11": "http://content.sportslogos.net/logos/6/221/thumbs/hj3gmh82w9hffmeh3fjm5h874.gif",
      "12": "http://content.sportslogos.net/logos/6/222/thumbs/e4701g88mmn7ehz2baynbs6e0.gif",
      "13": "http://content.sportslogos.net/logos/6/224/thumbs/3083.gif",
      "14": "http://content.sportslogos.net/logos/6/223/thumbs/3079.gif",
      "15": "http://content.sportslogos.net/logos/6/225/thumbs/22582752016.gif",
      "16": "http://content.sportslogos.net/logos/6/232/thumbs/zq8qkfni1g087f4245egc32po.gif",
      "17": "http://content.sportslogos.net/logos/6/234/thumbs/23467492017.gif",
      "18": "http://content.sportslogos.net/logos/6/2687/thumbs/khmovcnezy06c3nm05ccn0oj2.gif",
      "19": "http://content.sportslogos.net/logos/6/239/thumbs/bahmh46cyy6eod2jez4g21buk.gif",
      "20": "http://content.sportslogos.net/logos/6/229/thumbs/xeti0fjbyzmcffue57vz5o1gl.gif",
      "21": "http://content.sportslogos.net/logos/6/231/thumbs/793.gif",
      "22": "http://content.sportslogos.net/logos/6/230/thumbs/8xe4813lzybfhfl14axgzzqeq.gif",
      "23": "http://content.sportslogos.net/logos/6/4962/thumbs/496226812014.gif",
      "24": "http://content.sportslogos.net/logos/6/233/thumbs/827.gif",
      "25": "http://content.sportslogos.net/logos/6/228/thumbs/ifk08eam05rwxr3yhol3whdcm.gif",
      "26": "http://content.sportslogos.net/logos/6/235/thumbs/qhhir6fj8zp30f33s7sfb4yw0.gif",
      "27": "http://content.sportslogos.net/logos/6/237/thumbs/uig7aiht8jnpl1szbi57zzlsh.gif",
      "28": "http://content.sportslogos.net/logos/6/238/thumbs/23843702014.gif",
      "29": "http://content.sportslogos.net/logos/6/240/thumbs/24040432017.gif"
    }

  }

  imageStadiumMapping(Key) {
    return this.images[Key];
  }


  render() {
    const name = this.props.name
    const city = this.props.city
    const state = this.props.state
    const zip = this.props.zip
    const address = this.props.address
    const capacity = this.props.capacity
    const id = this.props.stadiumId

    return (
      <View style={styles.container}>
          <Image style={styles.image} source={{uri: this.imageStadiumMapping(id) }} />
          <Text style={styles.title}>{name}</Text>
          <Text style={styles.address}>{address + ", " + zip + ", " + city + ", " + state }</Text> 
          <Text style={styles.capacity}>Capactity: {capacity}</Text>
          
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 5
  },
  title : {
      textAlign: 'center',
      fontWeight: "bold",
      color: 'white'
  },
  capacity: {
      textAlign: 'center',
      color: 'white'
  },
  address: {
      textAlign: 'center',
      color: 'white'
  },
  image: {
    width: 110,
    height: 80,
    borderRadius: 4,
    marginBottom: 10
  }
});
