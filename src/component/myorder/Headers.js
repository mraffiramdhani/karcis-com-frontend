/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Icons from 'react-native-vector-icons/Foundation';
import MyIcon from 'react-native-vector-icons/Entypo';

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#000',
    padding: 5,
  },
  banner: {
    height: 40,
    backgroundColor: '#0064D2',
  },
  icon: {
    fontSize: 25,
    color: 'white',
    padding: 5,
    paddingRight: 15,
    paddingBottom: 10,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  card1: {
    width: 80,
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 5,
    elevation: 5,
  },
  card2: {
    marginRight: 10,
    marginLeft: 10,
    width: 80,
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 5,
    elevation: 5,
  },
});

class Headers extends Component {
  render() {
    return (
      <View>
        <View style={styles.banner}>
          <View style={styles.row}>
            <View style={{flex: 1}}>
              <Text style={{padding: 15, color: 'white', fontSize: 15}}>
                {' '}
                My Order{' '}
              </Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Icons name="clipboard-notes" style={styles.icon} />
              <MyIcon name="dots-three-vertical" style={styles.icon} />
            </View>
          </View>
        </View>
      </View>
    );
  }
}

export default Headers;
