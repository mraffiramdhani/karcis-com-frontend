import React, { Component } from 'react'
import { Text, View, SafeAreaView, StyleSheet, ScrollView, StatusBar } from 'react-native'
import { TextInput } from 'react-native-paper'


import { HeaderLogin } from '../../components/Header'

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      bannerImage: [require('../../assets/images/carouselImage/1.png'), require('../../assets/images/carouselImage/2.png'), require('../../assets/images/carouselImage/3.png'), require('../../assets/images/carouselImage/4.png')]
    }
  }
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar backgroundColor="#0953A6" barStyle="light-content" />
        <HeaderLogin />
        <ScrollView
          showsVerticalScrollIndicator={false}>
          <View style={styles.body}>
            <Text style={styles.textSectionTitle}>Log in to enjoy faster booking, Tix Point, and member deals</Text>
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
                label='Password'
                mode='outlined'
                style={styles.textInput}
                theme={{ colors: { primary: '#0064D2', underlineColor: 'transparent' } }}
                secureTextEntry={true}
                value={this.state.password}
                onChangeText={password => this.setState({ password })}
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
    fontSize: 18,
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
  }
})

export default Home
