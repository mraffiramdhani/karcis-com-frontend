import React, { Component } from 'react'
import axios from 'axios'
import { Text, View, SafeAreaView, StyleSheet, ScrollView, StatusBar, Alert, ActivityIndicator, Modal } from 'react-native'
import { TextInput } from 'react-native-paper';
import { connect } from 'react-redux';
import { withNavigation } from 'react-navigation';
import { register } from '../../redux/action/auth';

// import Components
import { HeaderLogin } from '../../components/Header';
import { ButtonLogin } from '../../components/Button';

class RegisterNextFirstOriginal extends Component {
  constructor(props) {
    super(props)
    this.state = {
      first_name: '',
      last_name: '',
      state_code: '+62',
      phone: '',
      password: '',
      isValid_dataFrom: false,
      modalVisible: false,
      isLoading: false,
      isSuccess: false,
    }
  }

  // async componentDidMount() {
  //   const { data } = await axios.get('https://restcountries.eu/rest/v2/all')
  //   this.setState({ contriesData: data, isfetched: !this.state.isfetched })
  // }

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
      phone: tnInput
    })
  }

  _checkPassword = (pInput) => {
    this.setState({
      password: pInput
    })
  }

  _handleModal = () => {
    const { modalVisible } = this.state
    modalVisible == false ?
      this.setState({
        modalVisible: true
      }) :
      this.setState({
        modalVisible: false
      })
  }

  handleRegister() {
    const { first_name, last_name, phone, password } = this.state;
    if (first_name !== '' && last_name !== '' && phone !== '' && password !== '') {
      const data = {
        email: this.props.navigation.getParam('email'),
        first_name: this.state.first_name,
        last_name: this.state.last_name,
        phone: this.state.phone,
        password: this.state.password
      };
      this.props.dispatch(register(data));
    }
    else {
      Alert.alert('Register Message.', 'Please Provide a Valid Data.');
    }
  }

  async componentDidUpdate(prevProps) {
    if (prevProps.auth.isLoading !== this.state.isLoading) {
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
      Alert.alert('Register Success', this.props.auth.message, [
        { text: 'OK', onPress: () => this.props.navigation.navigate('RegisterNextSecond') },
      ])
    } else {
      Alert.alert('Register Failed', this.props.auth.message)
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
        <HeaderLogin
          title="Daftar"
          onPressRight={() => this.props.navigation.navigate('Setting')} />
        <ScrollView
          showsVerticalScrollIndicator={false}>
          <View style={styles.body}>
            <View style={styles.containerFormRegister}>
              <View>
                <Text style={styles.labelForm}>Email</Text>
                <Text style={styles.textColor}>{this.props.navigation.getParam('email')}</Text>
              </View>
              <TextInput
                label='Nama depan'
                mode='outlined'
                style={styles.textInput}
                theme={{ colors: { primary: '#0064D2', underlineColor: 'transparent', } }}
                value={this.state.first_name}
                textContentType="name"
                onChangeText={this._checkFirstName}
              />
              <TextInput
                label='Nama Belakang'
                mode='outlined'
                style={styles.textInput}
                theme={{ colors: { primary: '#0064D2', underlineColor: 'transparent', } }}
                value={this.state.last_name}
                textContentType="name"
                onChangeText={this._checkLastName}
              />
              <View style={styles.containerFormTelpNumber}>
                <TextInput
                  label='Kode negara'
                  mode='outlined'
                  style={[styles.textInput, styles.formStateCode]}
                  theme={{ colors: { primary: '#0064D2', underlineColor: 'transparent', } }}
                  value={this.state.state_code}
                />
                <TextInput
                  label='Nomor ponsel'
                  mode='outlined'
                  style={[styles.textInput, styles.fromTelpNumber]}
                  theme={{ colors: { primary: '#0064D2', underlineColor: 'transparent', } }}
                  value={this.state.phone}
                  keyboardType="number-pad"
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
              {
                (!this.props.auth.isLoading)
                  ? <ButtonLogin
                    label="SELANJUTNYA"
                    onPress={() => this.handleRegister()}
                  />
                  : <ButtonLogin
                    label={<ActivityIndicator size="small" color="blue" />}
                    disabled={true}
                  />
              }
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
  iconChevron: {
    color: '#757575',
    position: 'absolute',
    top: 32,
    left: 80
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
    color: '#F2625F',
  },
  btnLogin: {
    width: '100%',
    backgroundColor: '#FEDD00',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    borderRadius: 50
  },
})

const mapStateToProps = state => {
  return {
    auth: state.auth,
    user: state.user
  }
}

const RegisterNextFirst = withNavigation(RegisterNextFirstOriginal)

export default connect(mapStateToProps)(RegisterNextFirst)