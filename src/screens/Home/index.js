/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
import React, { Component } from 'react';
import { Text, View, SafeAreaView, StyleSheet, ScrollView, TouchableOpacity, StatusBar, YellowBox } from 'react-native';
import { connect } from 'react-redux';
import { getBalance } from '../../redux/action/balance';
import { withNavigationFocus } from 'react-navigation';
import rupiahFormat from '../../utils/rupiahFormat';

import { Header } from '../../components/Header';
import BannerHome from '../../components/BannerHome';
import CategoriesHome from '../../components/CategoriesHome';
import HorizontalHotelPromo from '../../components/HorizontalHotelPromo';
import HorizontalSpecialPromo from '../../components/HorizontalSpecialPromo';
import HorizontalFeatures from '../../components/HorizontalFeatures';
import MenuCityOfSingapore from '../../components/MenuCityOfSingapore';
import HorizontalAttraction from '../../components/HorizontalAttraction';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

YellowBox.ignoreWarnings(['Warning:', 'Require cycle:'])

class HomeOriginal extends Component {
  constructor(props) {
    super(props)
    this.state = {
      bannerImage: [require('../../assets/images/carouselImage/1.png'), require('../../assets/images/carouselImage/2.png'), require('../../assets/images/carouselImage/3.png'), require('../../assets/images/carouselImage/4.png')],
      isLoading: false,
      isSuccess: false,
    }
  }

  async componentDidMount() {
    const jwt = this.props.auth.data.token;
    await this.props.dispatch(getBalance(jwt));
    await this.props.navigation.addListener('didFocus', () => this.onScreenFocus(jwt));
  }

  onScreenFocus(jwt) {
    if (jwt !== null && jwt !== undefined && jwt !== '') {
      this.props.dispatch(getBalance(jwt));
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.balance.isLoading !== this.state.isLoading) {
      if (prevProps.balance.isLoading) {
        this.setState({ isLoading: true });
      }
      else {
        this.setState({ isLoading: false, isSuccess: prevProps.balance.isSuccess });
      }
    }
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar backgroundColor="#0953A6" barStyle="light-content" />
        <Header onPressLogin={() => {
          return this.props.auth.data.token
            ? this.props.navigation.navigate('TopUp')
            : this.props.navigation.navigate('Login')
        }} isAuth={
          this.state.isSuccess && !this.state.isLoading
            ?
            <>
              <Icon name="ticket" size={15} />{" "}
              {rupiahFormat(this.props.balance.data.balance, '')}
            </>
            : ''} />
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
            <View style={styles.containerSpecialPromo}>
              <Text style={styles.textSectionTitle}>Penawaran Special</Text>
              <Text style={styles.textSectionSubtitle}>Penawaran Special khusus buat kamu</Text>
              <HorizontalSpecialPromo />
            </View>
            <View style={styles.containerNewFeatures}>
              <Text style={styles.textSectionTitle}>Kamu Udah Tau Belum?</Text>
              <Text style={styles.textSectionSubtitle}>Ada banyak fitur baru di tiket.com yang bikin perjalanmu makin mudah!</Text>
              <HorizontalFeatures />
            </View>
            <View style={styles.containerMenuCityOfSingapore}>
              <Text style={styles.textSectionTitle}>Eksplor Singapura di Awal Tahun!</Text>
              <MenuCityOfSingapore />
            </View>
            <View style={styles.containerWeekendAttraction}>
              <Text style={styles.textSectionTitle}>Ke Atraksi di Akhir Pekan!</Text>
              <Text style={styles.textSectionSubtitle}>Kalau bingung mau kemana saat weekend, bisa ke sini nih!</Text>
              <HorizontalAttraction />
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
    flex: 1
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
    paddingHorizontal: 16,
    marginBottom: -10
  },
  textSectionSubtitle: {
    color: '#646D83',
    fontSize: 14,
    paddingHorizontal: 16,
    lineHeight: 22,
    marginVertical: 16
  },
  containerNewYearPromo: {
    marginTop: 16,
    marginBottom: 40
  },
  containerSpecialPromo: {
    marginTop: 16,
    marginBottom: 20
  },
  containerNewFeatures: {
    marginTop: 16,
    marginBottom: 40
  },
  containerMenuCityOfSingapore: {
    marginTop: 16,
  }
})

const mapStateToProps = state => {
  return {
    auth: state.auth,
    balance: state.balance,
    page: state.page
  }
}

const Home = withNavigationFocus(HomeOriginal)

export default connect(mapStateToProps)(Home)
