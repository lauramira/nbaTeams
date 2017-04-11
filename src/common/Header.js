import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableHighlight,
  Image
} from 'react-native';

export default class Header extends Component {
  render() {

    const label = this.props.label;
    const hasBackButton = this.props.hasBackButton;
    const navigator = this.props.navigator;

    return (
      <View style={styles.container}>
        {hasBackButton && 
          <TouchableHighlight style={styles.backButton}
            onPress={() => navigator.pop({name: 'teamView'})}>
            <Image source={require('../assets/icons/ic_keyboard_backspace_white.png')}/>
          </TouchableHighlight>}
        <Text style={styles.label}>{label}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  label: {    
    fontSize: 18,
    textAlign: 'left',
    textAlignVertical: 'center',
    color: 'white',
    flex: 10
  },
  container: {
    width: Dimensions.get('window').width,
    backgroundColor: '#8996A0',
    flexDirection: 'row',
    padding: 15,
    marginTop: 20,
  },
  backButton : {
    flex: 1
  }
})
