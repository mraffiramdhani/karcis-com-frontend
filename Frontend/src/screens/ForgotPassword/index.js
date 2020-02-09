/* eslint-disable react/prop-types */
import React, { Component } from 'react'
import { Text, View, SafeAreaView, StyleSheet, ScrollView, StatusBar, Modal, Alert, ActivityIndicator } from 'react-native'
import { TextInput } from 'react-native-paper'
import { connect } from 'react-redux';
import { forgotPassword } from '../../redux/action/auth';

import { HeaderForgotPassword } from '../../components/Header'
import { ButtonLogin } from '../../components/Button'

class ForgotPassword extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      isLoading: false,
      isSuccess: false
    }
  }

  async handleSubmit() {
    await this.props.dispatch(forgotPassword(this.state.email))
  }

  async componentDidUpdate(prevProps) {
    if (prevProps.auth.isLoading !== this.state.isLoading && this.props.navigation.isFocused()) {
      if (prevProps.auth.isLoading) {
        await this.setState({ isLoading: true });
      }
      else {
        await this.setState({ isLoading: false, isSuccess: prevProps.auth.isSuccess });
        await this.handleRedirect();
      }
    }
  }

  handleRedirect() {
    if (this.state.isSuccess) {
      Alert.alert('Forgot Password', this.props.auth.message, [
        { text: 'OK', onPress: () => this.props.navigation.navigate('ForgotPasswordNext', { email: this.state.email }) },
      ]);
    } else {
      Alert.alert('Forgot Password', this.props.auth.message);
    }
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Modal
          animationType="fade"
          transparent={true}
          visible={this.props.auth.isLoading}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
          }}>
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.4)' }}>
            <ActivityIndicator size="large" color="blue" />
          </View>
        </Modal>
        <StatusBar backgroundColor="#0953A6" barStyle="light-content" />
        <HeaderForgotPassword
          onPressLeft={() => this.props.navigation.navigate('Login')}
          title="Lupa Kata Sandi" />
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
                keyboardType="email-address"
                onChangeText={email => this.setState({ email })}
              />
              <ButtonLogin
                label="KIRIM"
                onPress={() => this.handleSubmit()} />
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
    color: '#35405A',
    marginBottom: 20
  }
})

const mapStateToProps = state => {
  return {
    auth: state.auth
  }
}

export default connect(mapStateToProps)(ForgotPassword)
