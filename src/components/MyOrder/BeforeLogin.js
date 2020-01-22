/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';
import usericon from '../../image/before.jpg';
import {TouchableOpacity} from 'react-native-gesture-handler';

const styles = StyleSheet.create({
  buttonLogin: {
    backgroundColor: 'yellow',
    borderRadius: 50,
    height: 45,
    width: 350,
    alignItems: 'center',
    justifyContent: 'center',
  },
  secondButton: {
    backgroundColor: '#eee',
    borderRadius: 50,
    height: 45,
    width: 350,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#0064D2',
    fontSize: 17,
  },
});

export default class BeforeLogin extends Component {
  render() {
    return (
      <View>
        <View>
          <Image source={usericon} style={{height: 300, width: '100%'}} />
        </View>
        <View style={{alignItems: 'center', marginTop: 10}}>
          <TouchableOpacity style={styles.buttonLogin}>
            <Text style={styles.buttonText}>LOG IN</Text>
          </TouchableOpacity>
        </View>
        <View style={{alignItems: 'center', marginTop: 10}}>
          <TouchableOpacity style={styles.secondButton}>
            <Text style={styles.buttonText}>PESAN PERJALANAN</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
