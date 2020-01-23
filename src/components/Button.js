import React from 'react'
import { Text, StyleSheet, TouchableOpacity } from 'react-native'

export const ButtonLogin = (props) => {
  return (
    <TouchableOpacity style={styles.btnLogin}>
      <Text style={styles.textBtnLogin}>LOG IN</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  btnLogin: {
    width: '100%',
    backgroundColor: '#FEDD00',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    borderRadius: 50
  },
  textBtnLogin: {
    color: '#0064D2',
    fontWeight: 'bold',
    fontSize: 16
  }
})