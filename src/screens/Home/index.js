import React, { Component } from 'react'
import { Text, View, SafeAreaView, StyleSheet } from 'react-native'

import { Header } from '../../components/Header'

class Home extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Header />
        <View style={styles.body}>

        </View>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  body: {
    flex: 1
  }
})

export default Home
