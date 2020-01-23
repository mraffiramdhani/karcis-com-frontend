import React, { Component } from 'react'
import { Text, View, ScrollView, Image, StyleSheet, TouchableOpacity } from 'react-native'

export default class HorizontalAttraction extends Component {
  render() {
    return (
      <>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={styles.containerAttraction}>
          <TouchableOpacity style={styles.containerAttractionItem}>
            <View style={styles.containerImage}>
              <Image source={require('../assets/images/attraction/1.png')} style={styles.imageAttraction} />
            </View>
            <View style={styles.containerDescAttraction}>
              <Text style={styles.textTitleAttraction}>Trans Studio Bali</Text>
              <Text style={styles.textDescAttraction}>Senangnya ke Bali kalau ke atraksi ini</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.containerAttractionItem}>
            <View style={styles.containerImage}>
              <Image source={require('../assets/images/attraction/2.png')} style={styles.imageAttraction} />
            </View>
            <View style={styles.containerDescAttraction}>
              <Text style={styles.textTitleAttraction}>Legoland Malaysia</Text>
              <Text style={styles.textDescAttraction}>Pergi ke Malaysia jangan lupa ke sini ya!</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.containerAttractionItem, { marginRight: 16 }]}>
            <View style={styles.containerImage}>
              <Image source={require('../assets/images/attraction/3.png')} style={styles.imageAttraction} />
            </View>
            <View style={styles.containerDescAttraction}>
              <Text style={styles.textTitleAttraction}>Tiket Dunia Fantasi Ancol</Text>
              <Text style={styles.textDescAttraction}>Pasti seru kalau ke sini saat libur!</Text>
            </View>
          </TouchableOpacity>
        </ScrollView>
      </>
    )
  }
}

const styles = StyleSheet.create({
  containerAttraction: {
    flexDirection: "row",
  },
  containerAttractionItem: {
    width: 250,
    marginLeft: 16,
    borderRadius: 5,
    backgroundColor: '#fff'
  },
  containerImage: {
    height: 110,
    width: '100%',
    borderRadius: 5
  },
  imageAttraction: {
    width: undefined,
    height: undefined,
    flex: 1,
    resizeMode: 'cover',
    borderRadius: 5
  },
  containerDescAttraction: {
    height: 110,
    width: '100%',
    paddingVertical: 10
  },
  textTitleAttraction: {
    color: '#35405A',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10
  },
  textDescAttraction: {
    color: '#8A93A7',
    fontSize: 14,
    lineHeight: 20
  },
})
