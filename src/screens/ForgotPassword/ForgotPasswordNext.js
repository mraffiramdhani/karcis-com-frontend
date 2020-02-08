/* eslint-disable react/prop-types */
import React, { Component } from 'react'
import { Text, View, SafeAreaView, StyleSheet, ScrollView, StatusBar, ActivityIndicator, Alert, Modal } from 'react-native'
import OTPInputView from '@twotalltotems/react-native-otp-input'

import { HeaderForgotPassword } from '../../components/Header'

import { withNavigation } from 'react-navigation';
import { connect } from 'react-redux';
import { checkOTP } from '../../redux/action/auth';

class ForgotPasswordNexts extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      codeVerify: '',
      isLoading: false,
      isSuccess: false,
    }
  }

  async handleSubmit(code) {
    await this.setState({ codeVerify: code });
    await this.props.dispatch(checkOTP(this.state.codeVerify));
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
    const email = this.props.navigation.getParam('email');
    if (this.state.isSuccess) {
      Alert.alert('OTP Code Check Message', this.props.auth.message, [
        { text: 'OK', onPress: () => this.props.navigation.navigate('InputNewPassword', { email }) },
      ]);
    } else {
      Alert.alert('OTP Code Check Message', this.props.auth.message);
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
                onCodeFilled={code => this.handleSubmit(code)}
              />
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

const mapStateToProps = state => {
  return {
    auth: state.auth
  }
}

const ForgotPasswordNext = withNavigation(ForgotPasswordNexts)

export default connect(mapStateToProps)(ForgotPasswordNext)
