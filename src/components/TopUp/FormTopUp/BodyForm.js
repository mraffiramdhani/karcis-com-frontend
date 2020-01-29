/* eslint-disable no-alert */
/* eslint-disable react-native/no-inline-styles */
import React, { Component } from 'react';
import { Text, View, StyleSheet, Alert } from 'react-native';
import { Container, Content, Form, Item, Input, Label } from 'native-base';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { connect } from 'react-redux';
import { topUp } from '../../../redux/action/topup';
import { withNavigationFocus } from 'react-navigation';

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'yellow',
    borderRadius: 50,
    height: 45,
    width: 350,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#0064D2',
    fontSize: 17,
  },
  errorLabel: {
    color: 'red',
    fontSize: 10,
  },
});

class BodyFormOriginal extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: 0,
      isSuccess: false,
      isClicked: false
    }
    const jwt = this.props.auth.data.token;
    this.props.navigation.addListener('didFocus', () => this.onScreenFocus(jwt));
  }

  onScreenFocus(jwt) {
    if (jwt !== null && jwt !== undefined && jwt !== '') {
      this.setState({ isSuccess: false, isClicked: false });
    }
  }

  async handleTopUp() {
    const jwt = await this.props.auth.data.token
    if (jwt !== null && jwt !== undefined) {
      console.log(jwt)
      const data = { value: this.state.value }
      this.props.dispatch(topUp(jwt, data))
      this.setState({ isClicked: true });
    }
  }

  async componentDidUpdate(prevProps) {
    if (prevProps.topup.isSuccess && this.state.isClicked) {
      if (this.state.isSuccess) {
        this.handleRedirect();
      }
      else {
        this.setState({ isSuccess: true });
      }
    }
  }

  handleRedirect() {
    if (this.state.isSuccess) {
      Alert.alert('Top Up Success', 'Your Top Up Request Is Confirmed.')
    } else {
      Alert.alert('Top Up Failed', 'Please Try Again.')
    }
  }

  render() {
    return (
      <Container>
        <Content>
          <Form>
            <Item floatingLabel>
              <Label style={{ fontSize: 15 }}>Nama Lengkap</Label>
              <Input />
            </Item>
            <Item floatingLabel last>
              <Label style={{ fontSize: 15 }}>Email</Label>
              <Input keyboardType="email-address" />
            </Item>
            <Item floatingLabel last>
              <Label style={{ fontSize: 15 }}>No. Handphone</Label>
              <Input keyboardType="phone-pad" />
            </Item>
            <Item floatingLabel last>
              <Label style={{ fontSize: 15 }}>No. Kartu Kredit</Label>
              <Input keyboardType="number-pad" />
            </Item>
            <Item floatingLabel last>
              <Label style={{ fontSize: 15 }}>Jumlah Saldo</Label>
              <Input keyboardType="number-pad" onChangeText={e => this.setState({ value: e })} />
            </Item>
          </Form>

          <View style={{ alignItems: 'center', marginTop: 10 }}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => this.handleTopUp()}>
              <Text style={styles.buttonText}>TOP UP</Text>
            </TouchableOpacity>
          </View>
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth,
    topup: state.topup
  }
}

const BodyForm = withNavigationFocus(BodyFormOriginal)

export default connect(mapStateToProps)(BodyForm)