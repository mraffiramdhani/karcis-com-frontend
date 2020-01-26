import React, {Component} from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import Icons from 'react-native-vector-icons/AntDesign';
import {Left, Card, CardItem, Right} from 'native-base';

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
  image : {
    width: '60%',
    height : 50,
    flex:1,
    backgroundColor: '#fff',
    borderRadius: 5,
  },
  buttonLogin: {
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
});

class HeaderOrder extends Component {
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
                        Form Pemesanan{' '}
                        </Text>
                    </Left>

                    <Icons name="arrowleft" style={styles.icon} />
                    </View>
                </View>
                </View>
            </View>
        )
    }
}

export default HeaderOrder