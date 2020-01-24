/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Icons from 'react-native-vector-icons/AntDesign';
import {Left, Container, Accordion} from 'native-base';

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
  }
});

class HeaderFormHist extends Component {
  render() {
    return (
      <View>
        <View style={styles.banner}>
          <View style={styles.row}>
            <View style={{flex: 1}}>
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

              <Icons name="arrowleft" style={styles.icon} />
            </View>
          </View>
        </View>
      </View>
    );
  }
}

export default HeaderFormHist