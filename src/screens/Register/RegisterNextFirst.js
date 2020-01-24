import React, { Component } from 'react'
import { Text, View, SafeAreaView, StyleSheet, ScrollView, StatusBar } from 'react-native'
import { TextInput } from 'react-native-paper'

// import Components
import { HeaderLogin } from '../../components/Header'
import { ButtonLogin } from '../../components/Button'

class RegisterNextFirst extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: this.props.navigation.getParam('email'),
      first_name: '',
      last_name: '',
      state_code: '',
      telp_number: '',
      password: '',
      isValid_dataFrom: false,
    }
  }

  _checkFirstName = (fnInput) => {
    this.setState({
      first_name: fnInput
    })
  }

  _checkLastName = (lnInput) => {
    this.setState({
      last_name: lnInput
    })
  }

  _checkStateCode = (stInput) => {
    this.setState({
      state_code: stInput
    })
  }

  _checkTelpNumber = (tnInput) => {
    this.setState({
      telp_number: tnInput
    })
  }

  _checkPassword = (pInput) => {
    this.setState({
      password: pInput
    })
  }

  render() {
    const { email } = this.state
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar backgroundColor="#0953A6" barStyle="light-content" />
        <HeaderLogin
          title="Daftar"
          onPressLeft={() => this.props.navigation.navigate('Register')} />
        <ScrollView
          showsVerticalScrollIndicator={false}>
          <View style={styles.body}>
            <View style={styles.containerFormRegister}>
              <View>
                <Text style={styles.labelForm}>Email</Text>
                <Text style={styles.textColor}>{email}</Text>
              </View>
              <TextInput
                label='Nama depan'
                mode='outlined'
                style={styles.textInput}
                theme={{ colors: { primary: '#0064D2', underlineColor: 'transparent', } }}
                value={this.state.first_name}
                onChangeText={this._checkFirstName}
              />
              <TextInput
                label='Nama Belakang'
                mode='outlined'
                style={styles.textInput}
                theme={{ colors: { primary: '#0064D2', underlineColor: 'transparent', } }}
                value={this.state.last_name}
                onChangeText={this._checkLastName}
              />
              <View style={styles.containerFormTelpNumber}>
                <TextInput
                  label='Kode negara'
                  mode='outlined'
                  style={[styles.textInput, styles.formStateCode]}
                  theme={{ colors: { primary: '#0064D2', underlineColor: 'transparent', } }}
                  value={this.state.state_code}
                  onChangeText={this._checkStateCode}
                />
                <TextInput
                  label='Nomor ponsel'
                  mode='outlined'
                  style={[styles.textInput, styles.fromTelpNumber]}
                  theme={{ colors: { primary: '#0064D2', underlineColor: 'transparent', } }}
                  value={this.state.telp_number}
                  onChangeText={this._checkTelpNumber}
                />
              </View>
              <TextInput
                label='Kata Sandi'
                mode='outlined'
                style={styles.textInput}
                theme={{ colors: { primary: '#0064D2', underlineColor: 'transparent', } }}
                value={this.state.password}
                onChangeText={this._checkPassword}
                secureTextEntry
              />
              <View style={styles.containertFormProvisions}>
                <Text style={styles.labelForm}>Min. 7 karakter dengan kombinasi antara angka, simbol, & huruf kapital.</Text>
              </View>
              <ButtonLogin
                label="SELANJUTNYA"
                onPress={() => this.props.navigation.navigate('RegisterNextSecond')} />
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
  containerFormRegister: {
    paddingHorizontal: 16,
    marginTop: -5
  },
  labelForm: {
    fontSize: 12,
    color: '#757575',
    marginBottom: 5
  },
  textColor: {
    color: '#222'
  },
  textInput: {
    backgroundColor: "#FFF",
    height: 45,
    color: '#35405A',
    marginTop: 20
  },
  containerFormTelpNumber: {
    width: '100%',
    flexDirection: "row",
  },
  formStateCode: {
    flex: 1.18,
    marginRight: 10
  },
  fromTelpNumber: {
    flex: 2
  },
  containertFormProvisions: {
    marginLeft: 10,
    marginBottom: 15
  },
  textError: {
    marginTop: -25,
    marginBottom: 25,
    color: '#F2625F'
  }
})

export default RegisterNextFirst