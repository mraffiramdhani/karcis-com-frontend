import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { Item } from 'native-base'
import MyIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';
import HeaderLoc from '../../components/ListLocation/HeaderLoc';

const styles = StyleSheet.create({
    root: {
      flex: 1,
      backgroundColor: '#eee',
      padding: 5,
    },
    banner: {
      height: 100,
      backgroundColor: '#0064D2',
    },
    icon: {
      fontSize: 25,
      color: 'white',
      padding: 5,
      paddingRight: 15,
      paddingBottom: 10,
      marginTop: 10,
    },
    row: {
      flexDirection: 'row',
      alignItems: 'flex-end',
    },
    searchBar: {
        marginTop: '-20%',
        backgroundColor: '#fff'
    }
  });

class BodyLoc extends Component {
  render() {
    return (
      <ScrollView>
      <Item>
        <MyIcons name="crosshairs-gps" style={{color : '#0064D2', fontSize: 20, marginTop: '5%', marginBottom: '5%', marginLeft: '4%', marginRight: '2%'}} />
        <Text>Dekat saya</Text>
      </Item>

      <View style={{margin: '5%'}}>
        <Text style={{color: 'grey'}}>Tujuan Terpopuler</Text>
      </View>

      <View>
        <View style={{flexDirection: 'row'}}>
          <MyIcons name="city-variant-outline" style={{color : '#0064D2', fontSize: 20, marginLeft: '4%', marginRight: '2.5%'}} />
          <Text>Bandung</Text>
        </View>
        <View style={{marginBottom: '6%'}}>
          <Text style={{marginLeft: '12%', fontSize: 12, color: 'grey'}}>Jawa Barat, Indonesia</Text>
        </View>
      </View>
      
      </ScrollView>
    )
  }
}

export default BodyLoc
