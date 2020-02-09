import React, { Component } from 'react'
import { Text, View, Image, Dimensions, StyleSheet } from 'react-native'
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';
import { Left, List, Item, Right, Card, Thumbnail } from 'native-base';
import { withNavigation } from 'react-navigation'
import rupiahFormat from '../../utils/rupiahFormat'
import DetailHotel from '../../screens/DetailHotel';

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

class FootersDetails extends Component {
  render() {
    const { dataDetail, cost, orderData } = this.props
    return (
      <View style={{ backgroundColor: '#fff' }}>
        <View style={{ backgroundColor: "grey", height: 1 }}></View>
        <View style={{ height: 54, backgroundColor: '#fff', flexDirection: 'row' }}>

          <Left style={{ marginLeft: 20 }}>
            <View>
              <Text style={{ color: 'grey' }}>Dari</Text>
            </View>
          </Left>



          <Right style={{ marginRight: 20 }}>
            <View style={{ flexDirection: 'row' }}>
              <Text style={{ color: '#0064D2', fontSize: 15 }}>{rupiahFormat(cost, 'Rp. ')}</Text>
              <Text style={{ fontSize: 13, color: 'grey', marginLeft: 3 }}>/kamar/malam</Text>
            </View>
          </Right>

        </View>
        <View style={{ alignItems: 'center', marginBottom: 10 }}>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('ListRoom', {
            id: dataDetail.id,
            orderData: orderData
          })}
            style={styles.buttonLogin}>
            <Text style={styles.buttonText}>PILIH KAMAR</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const FootersDetail = withNavigation(FootersDetails);
export default FootersDetail