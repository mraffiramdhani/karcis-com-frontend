import React, { Component } from 'react'
import { Text, View, SafeAreaView, StyleSheet, ScrollView, StatusBar, TouchableOpacity, Image, Alert, ActivityIndicator } from 'react-native'
import { TextInput } from 'react-native-paper'
import { withNavigationFocus } from 'react-navigation';
import { connect } from 'react-redux';
import { login } from '../../redux/action/auth';
import { setPage } from '../../redux/action/page';
import { getBalance } from '../../redux/action/balance';
import AsyncStorage from '@react-native-community/async-storage';

import { HeaderLogin } from '../../components/Header'
import { ButtonLogin } from '../../components/Button'

class LoginOriginal extends Component {
  constructor(props) {
    super(props)
    this.state = {
      page: 'Login',
      email: '',
      password: '',
      isLoading: false,
      isAuth: false,
      message: ''
    }
  }

  // async shouldComponentUpdate(nextProps){
  //   if(nextProps.navigation.isFocused()){
  //     return true;
  //   }

  //   if(!nextProps.auth.isLoading){
  //     await this.setState({isLoading: false});
  //     return true;
  //   }
  // }

  async handleSubmit() {
    const { email, password } = this.state;
    const data = { email, password };
    await this.props.dispatch(login(data));
  }

  async componentDidUpdate(prevProps) {
    if(this.props.auth.isLoading !== this.state.isLoading){
      if(this.props.auth.isLoading){
        await this.setState({isLoading: true});
      }
      else {
        await this.setState({isLoading: false});
        this.handleRedirect();
      }
    }
  }

  async handleRedirect() {
    if(!this.state.isLoading){
      if (this.props.auth.isAuth) {
        await this.props.dispatch(getBalance(this.props.auth.data.token))
        Alert.alert('Login Message', 'Authentication Success', [
          { text: 'OK', onPress: () => this.props.navigation.navigate(this.props.page.page) },
        ])
      } else {
        Alert.alert('Login Message', 'Authentication Failed. Please Try Again.')
      }
    }
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar backgroundColor="#0953A6" barStyle="light-content" />
        <HeaderLogin title="Masuk" onPressLeft={() => this.props.navigation.goBack()}
          onPressRight={() => this.props.navigation.navigate('Setting')}
        />
        <ScrollView
          showsVerticalScrollIndicator={false}>
          <View style={styles.body}>
            <Text style={styles.textSectionTitle}>Log in untuk memesan lebih cepat, TIX POINT, dan promo eksklusif</Text>
            <View style={styles.containerInputLogin}>
              <TextInput
                label='Email'
                mode='outlined'
                style={styles.textInput}
                theme={{ colors: { primary: '#0064D2', underlineColor: 'transparent', } }}
                value={this.state.email}
                onChangeText={email => this.setState({ email })}
              />
              <TextInput
                label='Kata Sandi'
                mode='outlined'
                style={styles.textInput}
                theme={{ colors: { primary: '#0064D2', underlineColor: 'transparent' } }}
                secureTextEntry={true}
                value={this.state.password}
                onChangeText={password => this.setState({ password })}
              />
              <TouchableOpacity
                style={styles.linkForgotPassword}
                onPress={() => this.props.navigation.navigate('ForgotPassword')}>
                <Text style={styles.textForgotPassword}>Lupa kata sandi?</Text>
              </TouchableOpacity>
              {
                this.props.auth.isLoading
                ? <ButtonLogin label={<ActivityIndicator size="small" color="blue" />} onPress={() => this.handleSubmit()} />
                : <ButtonLogin label={"LOG IN"} onPress={() => this.handleSubmit()} />
              }
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
            <View style={styles.containerRegister}>
              <Text style={styles.textOrWith}>Belum punya akun?</Text>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('Register')}><Text style={styles.textRegister}>DAFTAR</Text></TouchableOpacity>
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
  containerInputLogin: {
    paddingHorizontal: 16,
    marginTop: 5
  },
  textInput: {
    backgroundColor: "#FFF",
    height: 45,
    marginTop: 20,
    color: '#35405A',
    marginBottom: 5
  },
  linkForgotPassword: {
    alignSelf: 'flex-end',
    marginTop: 15,
    marginBottom: 20
  },
  textForgotPassword: {
    color: '#0064D2'
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
  containerRegister: {
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 25,
  },
  textRegister: {
    color: '#0064D2'
  }
})

const mapStateToProps = state => {
  return {
    auth: state.auth,
    page: state.page
  }
}

const Login = withNavigationFocus(LoginOriginal)

export default connect(mapStateToProps)(Login)
