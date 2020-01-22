/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {View, StyleSheet, Image} from 'react-native';
import {Text} from 'native-base';
import Icons from 'react-native-vector-icons/FontAwesome5';
import usericon from '../../image/membercard.png';

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#000',
    padding: 5,
  },
  banner: {
    height: 50,
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
  info: {
    backgroundColor: '#eee',
    paddingTop: 10,
    alignItems: 'center',
  },
  image: {
    width: '100%',
  },
  coin: {
    fontSize: 20,
    color: 'gold',
    marginRight: 10,
  },
});

class BodyPoint extends Component {
  render() {
    return (
      <View style={styles.info}>
        <View>
          <Text style={{fontSize: 20, marginBottom: 10}}> Username </Text>
        </View>

        <Image
          source={usericon}
          style={{height: 200, width: 320, borderRadius: 10, marginBottom: 15}}
        />

        <View style={{flexDirection: 'row', marginBottom: 5}}>
          <Icons name="coins" style={styles.coin} />
          <Text style={{fontWeight: 'bold', fontSize: 16}}>
            Rp. 2.000.000,-
          </Text>
        </View>

        <View style={{marginBottom: 10}}>
          <Text>Transaksi Terakhir : 20 Januari 2020</Text>
        </View>
      </View>
    );
  }
}

export default BodyPoint;
