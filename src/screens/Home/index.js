import React, { Component } from 'react'
import { Text, View, SafeAreaView, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'

import { Header } from '../../components/Header'
import BannerHome from '../../components/BannerHome'
import CategoriesHome from '../../components/CategoriesHome'
import HorizontalHotelPromo from '../../components/HorizontalHotelPromo'

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      bannerImage: [require('../../assets/carouselImage/1.png'), require('../../assets/carouselImage/2.png'), require('../../assets/carouselImage/3.png'), require('../../assets/carouselImage/4.png')]
    }
  }
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Header />
        <ScrollView
          showsVerticalScrollIndicator={false}>
          <View style={styles.body}>
            <View>
              <BannerHome image={this.state.bannerImage} />
              <TouchableOpacity style={styles.btnSeeAllPromo}>
                <Text style={styles.textBtnSeeAllPromo}>See All Promo</Text>
              </TouchableOpacity>
            </View>
            <View>
              <Text style={styles.textSectionTitle}>Hey you, going anywhere?</Text>
              <CategoriesHome />
            </View>
            <View style={styles.containerNewYearPromo}>
              <Text style={styles.textSectionTitle}>Awali Tahun Baru dengan Staycation!</Text>
              <Text style={styles.textSectionSubtitle}>Suasana tahun baru masih terasa. Staycation saat weekend, boleh juga!</Text>
              <HorizontalHotelPromo />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF'
  },
  body: {
    flex: 1,
    paddingBottom: 20
  },
  btnSeeAllPromo: {
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    position: "relative",
    width: 90,
    alignItems: "center",
    justifyContent: "center",
    padding: 3,
    alignSelf: 'flex-end',
    borderRadius: 5,
    right: 16,
    bottom: 40
  },
  textBtnSeeAllPromo: {
    color: '#fff',
    fontSize: 12
  },
  textSectionTitle: {
    color: '#35405A',
    fontSize: 18,
    fontWeight: 'bold',
    paddingHorizontal: 16
  },
  textSectionSubtitle: {
    color: '#646D83',
    fontSize: 14,
    paddingHorizontal: 16,
    lineHeight: 22,
    marginVertical: 15
  },
  containerNewYearPromo: {
    marginTop: 16
  }
})

export default Home
