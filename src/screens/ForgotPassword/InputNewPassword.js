import React, { Component } from 'react'
import { Text, View, SafeAreaView, StyleSheet, ScrollView, StatusBar } from 'react-native'
import { TextInput } from 'react-native-paper'

import { HeaderForgotPassword } from '../../components/Header'
import { ButtonLogin } from '../../components/Button'

class InputNewPassword extends Component {
  constructor(props) {
    super(props)
    this.state = {
      newPassword: ''
    }
  }
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar backgroundColor="#0953A6" barStyle="light-content" />
        <HeaderForgotPassword
          onPressLeft={() => this.props.navigation.navigate('Login')}
          title="Buat Kata Sandi Baru" />
        <ScrollView
          showsVerticalScrollIndicator={false}>
          <View style={styles.body}>
            <Text style={styles.textSectionTitle}>Hi Mochhamad Raffi Ramdhani</Text>
            <Text style={styles.textSectionSubtitle}>Buat kata sandi barumu. Tip: buat yang mudah diingat tapi susah ditebak.</Text>
            <View style={styles.containerInputForgotPassword}>
              <TextInput
                label='Kata Sandi Baru '
                mode='outlined'
                style={styles.textInput}
                theme={{ colors: { primary: '#0064D2', underlineColor: 'transparent', } }}
                value={this.state.email}
                onChangeText={newPassword => this.setState({ newPassword })}
              />
              <Text style={styles.labelForm}>Min. 7 karakter dengan kombinasi antara angka, simbol, & huruf kapital.</Text>
              <ButtonLogin
                label="KONFIRMASI"
                onPress={() => this.props.navigation.navigate('ForgotPasswordNext')} />
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
    color: '#35405A'
  },
  labelForm: {
    fontSize: 12,
    color: '#757575',
    marginBottom: 20
  },
})

export default InputNewPassword
