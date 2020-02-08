import React, { Component } from 'react'
import { Text, View, StyleSheet, SafeAreaView, Image, Dimensions } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { connect } from 'react-redux';
import { withNavigation } from 'react-navigation';

const BannerHeight = Dimensions.get('window').height / 2.3;

class RegisterNextSeconds extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Image source={require('../../assets/images/logo/successRegister.png')}
          style={styles.img} />
        <View style={styles.containerText}>
          <Text style={styles.textName}>Hi {this.props.auth.data.first_name} {this.props.auth.data.last_name}, selamat datang</Text>
          <Text style={styles.textDesc}>sekarang kamu bisa pesan lebih cepat dengan Smart Traveler, nimati TIX Point, Member Deals dan banyak keuntungan lain. Sudah siap?</Text>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Home')}
            style={styles.btnSuccessRegister}>
            <Text style={styles.textBtn}>AYO!</Text>
          </TouchableOpacity >
        </View>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  containerText: {
    flex: 1,
    backgroundColor: "#FFF",
    paddingHorizontal: 16,
    paddingTop: 20,
  },
  img: {
    width: '100%',
    height: BannerHeight
  },
  textName: {
    color: '#35405A',
    fontSize: 16,
    fontWeight: 'bold',
    paddingHorizontal: 16,
    textAlign: 'center'
  },
  textDesc: {
    color: '#646D83',
    fontSize: 14,
    lineHeight: 20,
    marginVertical: 10,
    textAlign: 'center'
  },
  btnSuccessRegister: {
    width: '100%',
    backgroundColor: '#0064D2',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    borderRadius: 50,
    marginTop: 15
  },
  textBtn: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 16
  }
})

const mapStateToProps = state => {
  return {
    auth: state.auth
  }
}

const RegisterNextSecond = withNavigation(RegisterNextSeconds);

export default connect(mapStateToProps)(RegisterNextSecond)
