import React, { Component } from 'react'
import { Text, View, SafeAreaView, StyleSheet, ScrollView, StatusBar } from 'react-native'
import OTPInputView from '@twotalltotems/react-native-otp-input'

import { HeaderForgotPassword } from '../../components/Header'

class ForgotPasswordNext extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      codeVerify: ''
    }
  }
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar backgroundColor="#0953A6" barStyle="light-content" />
        <HeaderForgotPassword
          onPressLeft={() => this.props.navigation.navigate('ForgotPassword')}
          title="Verifikasi Akun" />
        <ScrollView
          showsVerticalScrollIndicator={false}>
          <View style={styles.body}>
            <Text style={styles.textSectionTitle}>Pastikan kepemilikan akun ini</Text>
            <Text style={styles.textSectionSubtitle}>Masukan 4 digit kode yang kami kirimkan ke {this.state.email}</Text>
            <View style={styles.containerInputCode}>
              <OTPInputView
                style={{ width: '80%', height: 100 }}
                pinCount={4}
                autoFocusOnLoad
                codeInputFieldStyle={styles.underlineStyleBase}
                codeInputHighlightStyle={styles.underlineStyleHighLighted}
                onCodeFilled={(code => {
                  this.setState({ codeVerify: code })
                })}
              />
              <Text style={styles.textWaitingCode}>Tunggu untuk mengirim ulang kode</Text>
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
    paddingVertical: 16
  },
  textSectionTitle: {
    color: '#35405A',
    fontSize: 16,
    fontWeight: 'bold',
    paddingHorizontal: 16,
  },
  textSectionSubtitle: {
    color: '#35405A',
    fontSize: 14,
    paddingHorizontal: 16,
    lineHeight: 15,
    marginVertical: 10
  },
  containerInputCode: {
    paddingHorizontal: 16,
    alignItems: "center"
  },
  borderStyleBase: {
    width: 30,
    height: 45
  },

  borderStyleHighLighted: {
    borderColor: "#0064D2",
  },

  underlineStyleBase: {
    width: 30,
    height: 45,
    borderWidth: 0,
    borderBottomWidth: 1,
  },

  underlineStyleHighLighted: {
    borderColor: "#0064D2",
  },
  textWaitingCode: {
    color: '#757575',
    marginTop: -20,
    fontSize: 13
  },
})

export default ForgotPasswordNext
