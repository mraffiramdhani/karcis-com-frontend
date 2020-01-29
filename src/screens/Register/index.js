import React, { Component } from 'react'
import { Text, View, SafeAreaView, StyleSheet, ScrollView, TouchableOpacity, Image, StatusBar } from 'react-native'
import { TextInput } from 'react-native-paper'

// import Components
import { HeaderLogin } from '../../components/Header'
import { ButtonLogin } from '../../components/Button'

// utils
import { emailValidation } from '../../utils/emailValidation'

class Register extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      isValid_email: false,
      disabled: false
    }
  }

  _checkEmail = (emailInput) => {
    const isTrue = emailValidation(emailInput)

    isTrue ? this.setState({ isValid_email: true }) : this.setState({ isValid_email: false })
    this.setState({
      email: emailInput,
      disabled: false
    });
  }

  _handleNextFirst = () => {
    const { isValid_email, email } = this.state
    if (isValid_email == true) {
      this.props.navigation.navigate('RegisterNextFirst', {
        email
      })
    } else {
      this.setState({
        disabled: true
      })
    }
  }

  render() {
    const { disabled } = this.state
    const colorLineFrom = disabled == false ? '#0064D2' : '#F2625F'
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar backgroundColor="#0953A6" barStyle="light-content" />
        <HeaderLogin
          title="Daftar"
          onPressRight={() => this.props.navigation.navigate('Setting')} />
        <ScrollView
          showsVerticalScrollIndicator={false}>
          <View style={styles.body}>
            <Text style={styles.textSectionTitle}>Daftar untuk mulai berpetualang.</Text>
            <View style={styles.containerInputEmail}>
              <TextInput
                label='Email'
                mode='outlined'
                style={styles.textInput}
                theme={{ colors: { primary: colorLineFrom, underlineColor: 'transparent', } }}
                value={this.state.email}
                keyboardType="email-address"
                onChangeText={this._checkEmail}
              />
              {disabled == true &&
                <Text style={styles.textError}>Format email harus seperti email@email.com</Text>}
              <ButtonLogin
                label="SELANJUTNYA"
                disabled={disabled}
                onPress={() => this._handleNextFirst()} />
            </View>
            <View style={styles.containerLine}>
              <View
                style={styles.line}
              />
              <Text style={styles.textOrWith}>atau dengan</Text>
              <View
                style={styles.line}
              />
            </View>
            <View style={styles.containerLoginSocialMedia}>
              <TouchableOpacity style={styles.containerTextSocialMedia}>
                <Image source={require('../../assets/images/icons/google.png')} style={styles.imgIconSocialMedia} />
                <Text style={styles.textSocialMedia}>Google</Text>
              </TouchableOpacity>
              <View
                style={styles.lineSocialMedia}
              />
              <TouchableOpacity style={styles.containerTextSocialMedia}>
                <Image source={require('../../assets/images/icons/facebook.png')} style={styles.imgIconSocialMedia} />
                <Text style={styles.textSocialMedia}>Facebook</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.containerLogin}>
              <Text style={styles.textOrWith}>Sudah punya akun?</Text>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('Login')}><Text style={styles.textLogin}>MASUK</Text></TouchableOpacity>
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
  containerInputEmail: {
    paddingHorizontal: 16,
    marginTop: 20
  },
  textInput: {
    backgroundColor: "#FFF",
    height: 45,
    color: '#35405A',
    marginBottom: 25
  },
  textError: {
    marginTop: -25,
    marginBottom: 25,
    color: '#F2625F'
  },
  containerLine: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15
  },
  line: {
    borderBottomColor: '#757575',
    borderBottomWidth: 1,
    width: '10%',
  },
  textOrWith: {
    color: '#757575',
    marginHorizontal: 10,
    marginVertical: 10
  },
  containerLoginSocialMedia: {
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: '#757575',
    marginHorizontal: 16,
    marginTop: 5,
  },
  containerTextSocialMedia: {
    paddingVertical: 10,
    flexDirection: "row",
    alignItems: 'center'
  },
  lineSocialMedia: {
    borderBottomColor: '#757575',
    borderBottomWidth: 1,
  },
  imgIconSocialMedia: {
    width: 30,
    height: 30
  },
  textSocialMedia: {
    color: '#222222',
    marginLeft: 10
  },
  containerLogin: {
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 25,
  },
  textLogin: {
    color: '#0064D2'
  }
})

export default Register
