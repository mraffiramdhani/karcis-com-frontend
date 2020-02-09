/* eslint-disable react-native/no-inline-styles */
import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Icons from 'react-native-vector-icons/AntDesign';
import { Left } from 'native-base';
import { withNavigation } from 'react-navigation';

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#000',
    padding: 5,
  },
  banner: {
    height: 50,
    backgroundColor: '#0064D2',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  icon: {
    color: 'white',
    fontSize: 30,
    marginTop: 10,
    marginLeft: 10
  }
});

class HeaderFormHists extends Component {
  render() {
    return (
      <View>
        <View style={styles.banner}>
          <View style={styles.row}>
            <View style={{ flex: 1, justifyContent: 'center' }}>
              <Left>
                <Text
                  style={{
                    padding: 15,
                    color: 'white',
                    fontSize: 15,
                    marginRight: 150,
                  }}>
                  {' '}
                  Top Up History{' '}
                </Text>
              </Left>

              <Icons name="arrowleft" style={styles.icon} onPress={() => this.props.navigation.goBack()} />
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const HeaderFormHist = withNavigation(HeaderFormHists)

export default HeaderFormHist