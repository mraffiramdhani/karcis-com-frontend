import React, { Component } from 'react'
import { Text, View, ScrollView, Image, StyleSheet, TouchableOpacity } from 'react-native'

export default class HorizontalSpecialPromo extends Component {
  render() {
    return (
      <>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={styles.containerPromo}>
          <TouchableOpacity style={styles.containerPromoItem}>
            <View style={styles.containerImagePromo}>
              <Image source={require('../assets/images/specialPromo/1.png')} style={styles.imagePromo} />
            </View>
            <View style={styles.containerDescPromo}>
              <Text style={styles.textTitlePromo}>Gratis Airport Transfer</Text>
              <Text style={styles.textDescPromo}>Terbang dengan Citilink, GRATIS Airport Transfer!</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.containerPromoItem}>
            <View style={styles.containerImagePromo}>
              <Image source={require('../assets/images/specialPromo/2.png')} style={styles.imagePromo} />
            </View>
            <View style={styles.containerDescPromo}>
              <Text style={styles.textTitlePromo}>Free TIX Spot Airport Lounge!</Text>
              <Text style={styles.textDescPromo}>Nikmati Free TIX Spot Airport Lounge khusus penumpang Citilink</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.containerPromoItem}>
            <View style={styles.containerImagePromo}>
              <Image source={require('../assets/images/specialPromo/3.png')} style={styles.imagePromo} />
            </View>
            <View style={styles.containerDescPromo}>
              <Text style={styles.textTitlePromo}>Harga Special United Airlines</Text>
              <Text style={styles.textDescPromo}>Diskon Rp500.000 dengan United Airlines</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.containerPromoItem, { marginRight: 16 }]}>
            <View style={styles.containerImagePromo}>
              <Image source={require('../assets/images/specialPromo/4.png')} style={styles.imagePromo} />
            </View>
            <View style={styles.containerDescPromo}>
              <Text style={styles.textTitlePromo}>Herschel</Text>
              <Text style={styles.textDescPromo}>Diskon khusus untuk elite member tiket.com dari Herschel</Text>
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
    elevation: 5,
    borderRadius: 5,
    backgroundColor: '#fff',
    marginVertical: 10
  },
  containerImagePromo: {
    height: 110,
    width: '100%',
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomWidth: 1.5,
    borderBottomColor: '#eeeeee'
  },
  imagePromo: {
    width: undefined,
    height: undefined,
    flex: 1,
    resizeMode: 'contain',
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5
  },
  containerDescPromo: {
    height: 110,
    width: '100%',
    paddingHorizontal: 15,
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
