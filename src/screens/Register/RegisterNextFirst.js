import React, { Component } from 'react'
import axios from 'axios'
import { Text, View, SafeAreaView, StyleSheet, ScrollView, StatusBar } from 'react-native'
import { TextInput } from 'react-native-paper'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

// import Components
import { HeaderLogin } from '../../components/Header'
import { ButtonLogin } from '../../components/Button'
import { ModalStateCode } from '../../components/Modal'

class RegisterNextFirst extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      first_name: '',
      last_name: '',
      state_code: '+62',
      telp_number: '',
      password: '',
      isValid_dataFrom: false,
      modalVisible: false,
      contriesData: {},
      sifetched: false
    }
  }

  async componentDidMount() {
    const { data } = await axios.get('https://restcountries.eu/rest/v2/all')
    this.setState({ contriesData: data, isfetched: !this.state.isfetched })
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

  render() {
    const { email } = this.state
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar backgroundColor="#0953A6" barStyle="light-content" />
        <HeaderLogin
          title="Daftar"
          onPressLeft={() => this.props.navigation.navigate('Register')}
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
                <Icon name="chevron-down"
                  size={35} style={styles.iconChevron}
                  onPress={() => this._handleModal()} />
                <ModalStateCode
                  visible={this.state.modalVisible}
                  closeModal={() => this._handleModal()}
                  contriesData={this.state.contriesData}
                  isfetched={this.state.isfetched} />
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

  }
})

export default RegisterNextFirst