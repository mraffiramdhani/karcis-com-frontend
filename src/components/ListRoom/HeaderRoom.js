import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native'
import { Left, Input, Item, CardItem } from 'native-base';
import Icons from 'react-native-vector-icons/Entypo';
import MyIcons from 'react-native-vector-icons/FontAwesome5';

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
  image: {
    width: '100%',
    height: 60,
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 5,
  },
  buttonLogin: {
    backgroundColor: 'yellow',
    borderRadius: 20,
    height: 25,
    width: 80,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: -50
  },
  buttonText: {
    color: '#0064D2',
    fontSize: 15,
  },
});


class HeaderRoom extends Component {
  render() {
    const { orderData } = this.props
    return (
      <View>
        <View style={styles.banner}>
          <View style={styles.row}>
            <View style={{ flex: 1 }}>
              <Left>
                <Text
                  style={{
                    padding: 15,
                    color: 'white',
                    fontSize: 15,
                    marginRight: 220,
                    marginTop: 2
                  }}>
                  {' '}
                  Pilih Kamar{' '}
                </Text>
              </Left>
              <Icons name="cross" style={styles.icon} />
            </View>
          </View>
          <View style={{ backgroundColor: '#0260C4', borderRadius: 5, width: '90%', height: '40%', alignSelf: 'center', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
            <MyIcons name="door-open" style={{ color: 'white', fontSize: 15, marginLeft: '3%' }} />
            <Text style={{ marginLeft: '1%', color: 'white' }} > {orderData.roomValue} </Text>
            <MyIcons name="user" style={{ color: 'white', fontSize: 15, marginLeft: '3%' }} />
            <Text style={{ marginLeft: '1%', color: 'white' }} > {orderData.personValue} </Text>
            <Text style={{ marginLeft: '1%', marginTop: '1%', color: 'white', fontSize: 20 }} > | </Text>
            <Text style={{ marginLeft: '1%', color: 'white', fontSize: 10 }} > {orderData.chosenDate1.toString().substr(4, 12)} </Text>
            <Text style={{ marginLeft: '1%', color: 'white', fontSize: 12 }} > - </Text>
            <Text style={{ marginLeft: '1%', color: 'white', fontSize: 10 }} > {orderData.chosenDate2.toString().substr(4, 12)} </Text>
            <Text style={{ marginLeft: '1%', color: 'white', fontSize: 12 }} > {orderData.daterange} malam </Text>
          </View>
        </View>
      </View>
    )
  }
}

export default HeaderRoom