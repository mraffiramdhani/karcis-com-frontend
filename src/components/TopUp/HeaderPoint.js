/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import MyIcon from 'react-native-vector-icons/Entypo';
import {TouchableOpacity} from 'react-native-gesture-handler';

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

class HeaderPoint extends Component {
  render() {
    return (
      <View>
        <View style={styles.banner}>
          <View style={styles.row}>
            <View style={{flex: 1}}>
              <Text style={{padding: 15, color: 'white', fontSize: 15}}>
                {' '}
                Karcis Point{' '}
              </Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity>
                <MyIcon name="dots-three-vertical" style={styles.icon} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

export default HeaderPoint;
