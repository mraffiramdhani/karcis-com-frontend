import React, { Component } from 'react'
import { Text, View, StyleSheet, ActivityIndicator } from 'react-native'

export default class LodingScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        < ActivityIndicator color="blue" size="large" />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  }
})
