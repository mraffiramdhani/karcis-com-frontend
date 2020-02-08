/* eslint-disable react/prop-types */
import React, { Component } from 'react'
import { Text, View, SafeAreaView, StyleSheet, ScrollView, StatusBar, ActivityIndicator, Modal, Alert } from 'react-native'
import { TextInput } from 'react-native-paper'
import { withNavigation } from 'react-navigation';
import { connect } from 'react-redux';
import { resetPassword } from '../../redux/action/auth';

import { HeaderForgotPassword } from '../../components/Header'
import { ButtonLogin } from '../../components/Button'

class InputNewPasswords extends Component {
  constructor(props) {
    super(props)
    this.state = {
      newPassword: '',
      isLoading: false,
      isSuccess: false,
    }
  }

  handleSubmit() {
    const email = this.props.navigation.getParam('email');
    this.props.dispatch(resetPassword(email, this.state.newPassword));
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
      Alert.alert('Reset Password Message', this.props.auth.message, [
        { text: 'OK', onPress: () => this.props.navigation.navigate('Login') },
      ]);
    } else {
      Alert.alert('Reset Password Message', this.props.auth.message);
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
                value={this.state.newPassword}
                secureTextEntry
                onChangeText={newPassword => this.setState({ newPassword })}
              />
              <Text style={styles.labelForm}>Min. 7 karakter dengan kombinasi antara angka, simbol, & huruf kapital.</Text>
              <ButtonLogin
                label="KONFIRMASI"
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
    color: '#35405A'
  },
  labelForm: {
    fontSize: 12,
    color: '#757575',
    marginBottom: 20
  },
})

const mapStateToProps = state => {
  return {
    auth: state.auth
  }
}

const InputNewPassword = withNavigation(InputNewPasswords);

export default connect(mapStateToProps)(InputNewPassword)
