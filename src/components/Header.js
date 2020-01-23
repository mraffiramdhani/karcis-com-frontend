import React from 'react'
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

export const Header = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.containerImg}>
        <Image source={require('../assets/images/logo/logo.png')}
          style={styles.img} />
      </View>
      <View>
        <TouchableOpacity>
          <Text style={styles.textLogin}>LOG IN</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export const HeaderLogin = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.rightContainer}>
        <TouchableOpacity>
          <Icon name="arrow-left" size={25} color="#FFF" style={styles.icon} />
        </TouchableOpacity>
        <Text style={styles.textLogin}>LOG IN</Text>
      </View>
      <View>
        <TouchableOpacity>
          <Icon name="dots-vertical" size={25} color="#FFF" />
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 55,
    backgroundColor: '#0064D2',
    flexDirection: "row",
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20
  },
  containerImg: {
    width: 110,
    height: 55
  },
  img: {
    width: undefined,
    height: undefined,
    flex: 1,
    resizeMode: "contain"
  },
  textLogin: {
    color: '#fff',
    fontWeight: '500',
    fontSize: 14
  },
  rightContainer: {
    flexDirection: "row",
    alignItems: 'center'
  },
  icon: {
    marginRight: 10
  }

})
