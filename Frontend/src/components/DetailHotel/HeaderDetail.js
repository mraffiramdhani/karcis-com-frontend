import React, { Component } from 'react'
import { Text, View, Image, Dimensions, StyleSheet } from 'react-native'
import { Left, List, Item, Right, Card, Thumbnail } from 'native-base';
import Icons from 'react-native-vector-icons/AntDesign';

const BannerWidth = Dimensions.get('window').width;
const BannerHeight = Dimensions.get('window').height / 3;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#000',
    padding: 5,
  },
  banner: {
    height: 50,
    backgroundColor: 'rgba(0,0,0,0) transparent',
    zIndex: 50
  },
  icon: {
    fontSize: 25,
    color: 'black',
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
  imgBannerHome: {
    width: BannerWidth,
    height: BannerHeight,
    resizeMode: 'cover'
  },
  carousel: {
    height: BannerHeight

  },
  buttonLogin: {
    backgroundColor: 'yellow',
    borderRadius: 50,
    height: 45,
    width: 350,
    alignItems: 'center',
    justifyContent: 'center',
  },
  secondButton: {
    backgroundColor: '#eee',
    borderRadius: 50,
    height: 45,
    width: 350,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: '#0064D2',
    fontSize: 17,
  },
});

class HeaderDetail extends Component {
  render() {
    const { dataDetail } = this.props
    return (
      <View>
        <View style={styles.banner}>
          <View style={styles.row}>
            <View style={{ flex: 1 }}>
              <Left>
                <Text
                  style={{
                    padding: 15,
                    color: 'black',
                    fontSize: 15,
                    marginRight: 100,
                  }}>
                  {' '}
                  {dataDetail.name}
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

export default HeaderDetail