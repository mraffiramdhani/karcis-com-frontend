/* eslint-disable no-alert */
/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {Container, Content, Form, Item, Input, Label} from 'native-base';
import {TouchableOpacity} from 'react-native-gesture-handler';

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

export default class BodyForm extends Component {
  render() {
    return (
      <Container>
        <Content>
          <Form>
            <Item floatingLabel>
              <Label style={{fontSize: 15}}>Nama Lengkap</Label>
              <Input />
            </Item>
            <Item floatingLabel last>
              <Label style={{fontSize: 15}}>Email</Label>
              <Input keyboardType="email-address" />
            </Item>
            <Item floatingLabel last>
              <Label style={{fontSize: 15}}>No. Handphone</Label>
              <Input keyboardType="phone-pad" />
            </Item>
            <Item floatingLabel last>
              <Label style={{fontSize: 15}}>No. Kartu Kredit</Label>
              <Input keyboardType="number-pad" />
            </Item>
            <Item floatingLabel last>
              <Label style={{fontSize: 15}}>Jumlah Saldo</Label>
              <Input keyboardType="number-pad" />
            </Item>
          </Form>

          <View style={{alignItems: 'center', marginTop: 10}}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => alert('Top Up Berhasil')}>
              <Text style={styles.buttonText}>TOP UP</Text>
            </TouchableOpacity>
          </View>
        </Content>
      </Container>
    );
  }
}
