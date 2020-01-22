/* eslint-disable react-native/no-inline-styles */
import React, {Component} from './node_modules/react';
import {Text, View, Image, StyleSheet} from 'react-native';
import usericon from '../../image/after.jpg';
import {TouchableOpacity, ScrollView} from 'react-native-gesture-handler';

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
    marginBottom: 20,
  },
  buttonText: {
    color: '#0064D2',
    fontSize: 17,
  },
});

export default class AfterLogin extends Component {
  render() {
    return (
      <View>
        <ScrollView>
          <View>
            <Image source={usericon} style={{height: 330, width: '100%'}} />
          </View>
          <View style={{alignItems: 'center', marginTop: 10}}>
            <TouchableOpacity style={styles.buttonLogin}>
              <Text style={styles.buttonText}>PESAN PERJALANAN</Text>
            </TouchableOpacity>
          </View>
          <View style={{alignItems: 'center', marginTop: 10}}>
            <TouchableOpacity style={styles.secondButton}>
              <Text style={styles.buttonText}>LIHAT RIWAYAT PESANAN</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  }
}
