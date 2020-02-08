/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import React, { Component } from 'react'
import { Text, View, SafeAreaView, StyleSheet, ScrollView, TouchableOpacity, Image, StatusBar, ActivityIndicator, Modal, Alert } from 'react-native'
import { TextInput } from 'react-native-paper'
import { withNavigation } from 'react-navigation';
import { connect } from 'react-redux';
import { checkEmail } from '../../redux/action/user';

// import Components
import { HeaderLogin } from '../../components/Header'
import { ButtonLogin } from '../../components/Button'

class RegisterOriginal extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      isLoading: false,
      isSuccess: false,
    }
  }

  _handleNextFirst() {
    const { email } = this.state
    this.props.dispatch(checkEmail(email));
  }

  async componentDidUpdate(prevProps) {
    if (prevProps.user.isLoading !== this.state.isLoading) {
      if (prevProps.user.isLoading) {
        await this.setState({ isLoading: true });
      }
      else {
        await this.setState({ isLoading: false, isSuccess: prevProps.user.isSuccess });
        this.showStatus();
      }
    }
  }

  showStatus() {
    if (this.state.isSuccess) {
      Alert.alert('Email Validation Success', this.props.user.message, [
        { text: 'OK', onPress: () => this.props.navigation.navigate('RegisterNextFirst', { email: this.state.email }) }
      ]);
    }
    else {
      Alert.alert('Email Validation Failed', this.props.user.message);
    }
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar backgroundColor="#0953A6" barStyle="light-content" />
        <Modal
          animationType="fade"
          transparent={true}
          visible={this.props.user.isLoading}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
          }}>
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.4)' }}>
            <ActivityIndicator size="large" color="blue" />
          </View>
        </Modal>
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
                theme={{ colors: { primary: '#0064D2', underlineColor: 'transparent', } }}
                value={this.state.email}
                keyboardType="email-address"
                textContentType="emailAddress"
                onChangeText={(e) => this.setState({ email: e })}
              />
              <ButtonLogin
                label="SELANJUTNYA"
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

const mapStateToProps = state => {
  return {
    user: state.user
  }
}

const Register = withNavigation(RegisterOriginal);

export default connect(mapStateToProps)(Register)
