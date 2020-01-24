import React, { Component } from 'react'
import { Text, View, SafeAreaView, StyleSheet, ScrollView, StatusBar } from 'react-native'
import { TextInput } from 'react-native-paper'

import { HeaderForgotPassword } from '../../components/Header'
import { ButtonLogin } from '../../components/Button'

class ForgotPassword extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: ''
    }
  }
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar backgroundColor="#0953A6" barStyle="light-content" />
        <HeaderForgotPassword onPressLeft={() => this.props.navigation.navigate('Login')} />
        <ScrollView
          showsVerticalScrollIndicator={false}>
          <View style={styles.body}>
            <Text style={styles.textSectionTitle}>Lupa Kata Sandi?</Text>
            <Text style={styles.textSectionSubtitle}>Jangan khawatir. Tuliskan email atau nomor ponsel untuk membuat kata sandi baru.</Text>
            <View style={styles.containerInputForgotPassword}>
              <TextInput
                label='Email atau nomor ponsel '
                mode='outlined'
                style={styles.textInput}
                theme={{ colors: { primary: '#0064D2', underlineColor: 'transparent', } }}
                value={this.state.email}
                onChangeText={email => this.setState({ email })}
              />
              <ButtonLogin label="KIRIM" />
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
    color: '#646D83',
    fontSize: 14,
    paddingHorizontal: 16,
    lineHeight: 22,
    marginVertical: 10
  },
  containerInputForgotPassword: {
    paddingHorizontal: 16,
    marginTop: 5
  },
  textInput: {
    backgroundColor: "#FFF",
    height: 45,
    color: '#35405A',
    marginBottom: 20
  }
})

export default ForgotPassword
