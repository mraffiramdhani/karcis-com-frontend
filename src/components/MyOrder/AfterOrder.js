/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import {Container, Card, CardItem, Text, Body, Left} from 'native-base';
import Icons1 from 'react-native-vector-icons/FontAwesome';
import MyIcon from 'react-native-vector-icons/Entypo';
import {TouchableOpacity, ScrollView} from 'react-native-gesture-handler';

const styles = StyleSheet.create({
  icon: {
    fontSize: 20,
    color: '#eee',
  },
  row: {
    flexDirection: 'row',
  },
  metode: {
    backgroundColor: '#eee',
    borderRadius: 10,
    height: 30,
    width: 150,
    marginTop: 10,
    justifyContent: 'center',
  },
  buttonText: {
    color: '#0064D2',
    fontSize: 12,
    marginLeft: 5,
  },
});

export default class AfterOrder extends Component {
  render() {
    return (
      <Container>
        <ScrollView>
          <Card>
            <CardItem bordered>
              <Left>
                <Icons1
                  name="hotel"
                  style={{
                    marginRight: 5,
                    fontSize: 20,
                    color: 'red',
                  }}
                />
                <Text>Hotel</Text>
              </Left>
              <TouchableOpacity>
                <MyIcon name="dots-three-vertical" style={styles.icon} />
              </TouchableOpacity>
            </CardItem>
            <CardItem bordered>
              <Body>
                <View>
                  <Text style={{color: 'grey'}}>Order ID : 001</Text>
                </View>

                <View style={{marginTop: 5}}>
                  <Text style={{fontSize: 16}}>Zest Hotel Bogor</Text>
                </View>

                <View style={{marginTop: 5}}>
                  <Text style={{color: 'grey'}}>
                    1 Tamu
                    <MyIcon name="dot-single" style={{fontSize: 20}} />
                    <Text style={{color: 'grey'}}> 1 Kamar </Text>
                  </Text>
                </View>

                <View style={({marginTop: 5}, styles.row)}>
                  <Icons1
                    name="calendar"
                    style={{
                      fontSize: 15,
                      marginTop: 5,
                      marginRight: 5,
                      color: 'grey',
                    }}
                  />
                  <Text style={{color: 'grey'}}>
                    Jumat, 24 Januari 2020
                    <MyIcon name="dot-single" style={{fontSize: 20}} />
                    <Text style={{color: 'grey'}}> 1 Malam </Text>
                  </Text>
                </View>

                <TouchableOpacity style={styles.metode}>
                  <Text style={styles.buttonText}>Pilih metode pembayaran</Text>
                </TouchableOpacity>
              </Body>
            </CardItem>
          </Card>
        </ScrollView>
      </Container>
    );
  }
}
