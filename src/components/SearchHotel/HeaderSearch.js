/* eslint-disable no-undef */
import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { Left } from 'native-base';
import Icons from 'react-native-vector-icons/AntDesign';
import { withNavigation } from 'react-navigation';


const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#eee',
    padding: 5,
  },
  banner: {
    height: 150,
    backgroundColor: '#0064D2',
  },
  icon: {
    fontSize: 25,
    color: 'white',
    padding: 5,
    paddingRight: 15,
    paddingBottom: 10,
    marginTop: 10,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
});

class HeaderSearchOriginal extends Component {
  render() {
    return (
      <View>
        <View style={styles.banner}>
          <View style={styles.row}>
            <View style={{ flex: 1 }}>
              <Left>
                <Text
                  style={{
                    padding: 15,
                    color: 'white',
                    fontSize: 15,
                    marginRight: 220,
                  }}>
                  {' '}
                  Hotel{' '}
                </Text>
              </Left>

              <Icons name="arrowleft" style={styles.icon} onPress={() => this.props.navigation.goBack()} />
            </View>
          </View>
        </View>
      </View>
    )
  }
}

const HeaderSearch = withNavigation(HeaderSearchOriginal);

export default HeaderSearch
