import React, { Component } from 'react'
import { Text, View, ScrollView, Image, StyleSheet, TouchableOpacity } from 'react-native'

export default class HorizontalHotelPromo extends Component {
  render() {
    return (
      <>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={styles.containerPromo}>
          <TouchableOpacity style={styles.containerPromoItem}>
            <View style={styles.containerImagePromo}>
              <Image source={require('../assets/hotelRooms/room1.png')} style={styles.imagePromo} />
            </View>
            <View>
              <Text style={styles.textTitlePromo}>BlackBrid Hotel</Text>
              <Text style={styles.textDescPromo}>Pergi kebandung, nginep disini</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.containerPromoItem}>
            <View style={styles.containerImagePromo}>
              <Image source={require('../assets/hotelRooms/room1.png')} style={styles.imagePromo} />
            </View>
            <View>
              <Text style={styles.textTitlePromo}>BlackBrid Hotel</Text>
              <Text style={styles.textDescPromo}>Pergi kebandung, nginep disini</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.containerPromoItem, { marginRight: 16 }]}>
            <View style={styles.containerImagePromo}>
              <Image source={require('../assets/hotelRooms/room1.png')} style={styles.imagePromo} />
            </View>
            <View>
              <Text style={styles.textTitlePromo}>BlackBrid Hotel</Text>
              <Text style={styles.textDescPromo}>Pergi kebandung, nginep disini</Text>
            </View>
          </TouchableOpacity>
        </ScrollView>
      </>
    )
  }
}

const styles = StyleSheet.create({
  containerPromo: {
    flexDirection: "row",
  },
  containerPromoItem: {
    width: 140,
    marginLeft: 16
  },
  containerImagePromo: {
    height: 170,
    width: '100%',
    borderRadius: 5
  },
  imagePromo: {
    width: undefined,
    height: undefined,
    flex: 1,
    resizeMode: 'cover',
    borderRadius: 5
  },
  textTitlePromo: {
    color: '#35405A',
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10
  },
  textDescPromo: {
    color: '#8A93A7',
    fontSize: 14
  },
})
