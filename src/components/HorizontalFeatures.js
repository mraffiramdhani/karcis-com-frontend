import React, { Component } from 'react'
import { Text, View, ScrollView, Image, StyleSheet, TouchableOpacity } from 'react-native'

export default class HorizontalFeatures extends Component {
  render() {
    return (
      <>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={styles.containerPromo}>
          <TouchableOpacity style={styles.containerPromoItem}>
            <View style={styles.containerImagePromo}>
              <Image source={require('../assets/images/newFeature/1.png')} style={styles.imagePromo} />
            </View>
            <View style={styles.containerDescPromo}>
              <Text style={styles.textTitlePromo}>6 Fitur Baru Tiket.com</Text>
              <Text style={styles.textDescPromo}>Ada 6 fitur baru di tiket.com yang pastinya bikin liburan mudah!</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.containerPromoItem}>
            <View style={styles.containerImagePromo}>
              <Image source={require('../assets/images/newFeature/2.png')} style={styles.imagePromo} />
            </View>
            <View style={styles.containerDescPromo}>
              <Text style={styles.textTitlePromo}>Liburan Bareng Pakai  "Group Booking"</Text>
              <Text style={styles.textDescPromo}>Pakai fitur ini biar liburan bareng sama temen se-genk!</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.containerPromoItem, { marginRight: 16 }]}>
            <View style={styles.containerImagePromo}>
              <Image source={require('../assets/images/newFeature/3.png')} style={styles.imagePromo} />
            </View>
            <View style={styles.containerDescPromo}>
              <Text style={styles.textTitlePromo}>Fitur Hotel Now, Buat yang Suka Dadakan!</Text>
              <Text style={styles.textDescPromo}>Lupa rencanain nginep? Bisa pakai fitur ini saat tengah malam sekalipun!</Text>
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
    width: 250,
    marginLeft: 16,
    borderRadius: 5,
    backgroundColor: '#fff',
    marginVertical: 10
  },
  containerImagePromo: {
    height: 110,
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
  containerDescPromo: {
    height: 110,
    width: '100%',
    paddingVertical: 10
  },
  textTitlePromo: {
    color: '#35405A',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10
  },
  textDescPromo: {
    color: '#8A93A7',
    fontSize: 14,
    lineHeight: 20
  },
})
