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
  icon: {
    fontSize: 25,
    color: 'white',
    padding: 5,
    paddingRight: 15,
    paddingBottom: 10,
    marginTop: 10,
  },
  iconFilter: {
    fontSize: 20,
    color: '#0064D2',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  bottom: {
    bottom: -160,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    height: 30,
    width: 150,
    elevation: 5,
  },
});

class HeaderFormOriginal extends Component {
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
                    marginRight: 150,
                  }}>
                  {' '}
                  Top Up Saldo{' '}
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

const HeaderForm = withNavigation(HeaderFormOriginal)

export default HeaderForm;
