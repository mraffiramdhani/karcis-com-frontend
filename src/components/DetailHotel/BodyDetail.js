import React, { Component } from 'react'
import { Text, View, Image, Dimensions, StyleSheet } from 'react-native'
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';
import { Left, List, Item, Right, Card, Thumbnail } from 'native-base';
import StarRating from 'react-native-star-rating';
import MyIcons from 'react-native-vector-icons/Entypo';
import Icon from 'react-native-vector-icons/FontAwesome';
import Iconss from 'react-native-vector-icons/FontAwesome5';
import MyIcon from 'react-native-vector-icons/Octicons';
import YourIcon from 'react-native-vector-icons/EvilIcons';
import YourIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import usericon from '../../image/maps.png';
import Modal, { SlideAnimation, ModalTitle, ModalContent } from 'react-native-modals';
import rupiahFormat from '../../utils/rupiahFormat'
import FootersDetail from './FootersDetail';
import { APP_URL_IMAGE_ICON } from '../../config/Api';

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

class BodyDetail extends Component {
  constructor(props) {
    super(props)
    this.state = {
      visible: false
    }
  }
  render() {
    const { dataDetail, cost } = this.props
    return (
      <>
        <Item style={{ backgrounColor: '#fff', marginTop: 30, marginLeft: 15, marginRight: 15, flexDirection: 'column' }}>
          <View style={{ alignSelf: 'flex-start' }}>
            <Text style={{ fontSize: 17 }}>{dataDetail.name}</Text>
          </View>
          <View style={{ marginBottom: 20, width: '100%', flexDirection: 'row', marginTop: 10, alignSelf: 'flex-start' }}>
            <StarRating
              starSize={25}
              disabled={false}
              emptyStar={'ios-star-outline'}
              fullStar={'ios-star'}
              halfStar={'ios-star-half'}
              iconSet={'Ionicons'}
              maxStars={dataDetail.star}
              rating={dataDetail.star}
              fullStarColor={'yellow'} />
            <Text style={{ fontSize: 15, marginLeft: 20, marginTop: 3 }}>Hotel</Text>
            <MyIcons name="dot-single" style={{ color: 'grey', marginLeft: 3, fontSize: 15, marginTop: 5 }} />
            <Text style={{ color: 'grey', fontSize: 15, marginTop: 3 }}>Bogor</Text>
          </View>
        </Item>

        <View style={{ marginTop: 30, marginLeft: 15, marginRight: 15, flexDirection: 'column' }}>
          <View style={{ alignSelf: 'flex-start', marginBottom: 10 }}>
            <Text style={{ fontSize: 15 }}>Review</Text>
          </View>

          <View style={{ flexDirection: 'row' }}>
            <Left>
              <View style={{ marginBottom: 20, flexDirection: 'row', marginTop: 10 }}>
                <Icon name="square" style={{ color: '#0064D2', marginTop: 3, fontSize: 16, marginLeft: 2 }} />
                <MyIcon name="primitive-dot" style={{ color: 'yellow', marginLeft: 2, fontSize: 23 }} />
                <MyIcon name="primitive-dot" style={{ color: 'yellow', marginLeft: 2, fontSize: 23 }} />
                <MyIcon name="primitive-dot" style={{ color: 'yellow', marginLeft: 2, fontSize: 23 }} />
                <MyIcon name="primitive-dot" style={{ color: 'yellow', marginLeft: 2, fontSize: 23 }} />
                <MyIcon name="primitive-dot" style={{ color: 'grey', marginLeft: 2, fontSize: 23 }} />
              </View>
              <View style={{ marginTop: -20 }}>
                <Text style={{ fontSize: 15, color: '#48443B' }}> 8/10 Impressive </Text>
                <Text style={{ fontSize: 12, color: '#48443B' }}> Berdasarkan 200 Review</Text>
              </View>
            </Left>

            <Right>
              <View style={{ marginBottom: 20, flexDirection: 'row', marginTop: 10, alignSelf: 'flex-start', marginLeft: 18 }}>
                <MyIcons name="tripadvisor" style={{ color: 'orange', marginTop: 3, fontSize: 18, marginLeft: 10 }} />
                <View style={{ marginLeft: 3, marginTop: 5 }}>
                  <StarRating
                    starSize={14}
                    disabled={false}
                    emptyStar={'ios-star-outline'}
                    fullStar={'ios-star'}
                    halfStar={'ios-star-half'}
                    iconSet={'Ionicons'}
                    maxStars={5}
                    rating={3.5}
                    fullStarColor={'green'} />
                </View>
              </View>
              <View style={{ marginTop: -20 }}>
                <Text style={{ fontSize: 15, color: '#48443B' }}> 4.5/5 </Text>
                <Text style={{ fontSize: 12, color: '#48443B' }}> Berdasarkan 1200 Review</Text>
              </View>
            </Right>
          </View>
          <View style={{ alignSelf: 'flex-start', marginTop: 20, marginBottom: 20 }}>
            <Text style={{ color: '#0064D2' }}>Lebih banyak ulasan</Text>
          </View>

          <View style={{ alignSelf: 'flex-start', marginTop: 20, marginBottom: 10 }}>
            <Text style={{ fontSize: 15 }}>Apa kata pengunjung tentang properti ini</Text>
            <Text style={{ fontSize: 13, color: '#48443B' }}>Disukai oleh family wisatawan</Text>
          </View>

          <ScrollView horizontal={true}>
            <Card style={{ width: 230 }}>
              <View style={{ flexDirection: 'row' }}>
                <YourIcon name="location" style={{ marginLeft: 10, marginTop: 10, fontSize: 25, fontWeight: 'bold' }} />
                <Text style={{ marginTop: 10, fontSize: 15 }}> Lokasi </Text>
              </View>
              <View>
                <Text style={{ marginLeft: 10, fontSize: 13, color: '#48443B' }}> Disukai oleh 98 wisatawan </Text>
                <Text style={{ marginLeft: 10, marginBottom: 10, fontSize: 11, color: 'grey' }}> Dipuji di 107 ulasan </Text>
              </View>
            </Card>

            <Card style={{ width: 230 }}>
              <View style={{ flexDirection: 'row' }}>
                <Iconss name="door-open" style={{ marginLeft: 10, marginTop: 10, fontSize: 15, fontWeight: 'bold' }} />
                <Text style={{ marginTop: 10, fontSize: 15 }}> Kamar </Text>
              </View>
              <View>
                <Text style={{ marginLeft: 10, fontSize: 13, color: '#48443B' }}> Disukai oleh 87 wisatawan </Text>
                <Text style={{ marginLeft: 10, marginBottom: 10, fontSize: 11, color: 'grey' }}> Dipuji di 95 ulasan </Text>
              </View>
            </Card>

            <Card style={{ width: 230 }}>
              <View style={{ flexDirection: 'row' }}>
                <YourIcons name="room-service-outline" style={{ marginLeft: 10, marginTop: 5, fontSize: 25, fontWeight: 'bold' }} />
                <Text style={{ marginTop: 10, fontSize: 15 }}> Pelayanan </Text>
              </View>
              <View>
                <Text style={{ marginLeft: 10, fontSize: 13, color: '#48443B' }}> Disukai oleh 92 wisatawan </Text>
                <Text style={{ marginLeft: 10, marginBottom: 10, fontSize: 11, color: 'grey' }}> Dipuji di 101 ulasan </Text>
              </View>
            </Card>

            <Card style={{ width: 230 }}>
              <View style={{ flexDirection: 'row' }}>
                <YourIcons name="broom" style={{ marginLeft: 10, marginTop: 10, fontSize: 20, fontWeight: 'bold' }} />
                <Text style={{ marginTop: 10, fontSize: 15 }}> Kebersihan </Text>
              </View>
              <View>
                <Text style={{ marginLeft: 10, fontSize: 13, color: '#48443B' }}> Disukai oleh 88 wisatawan </Text>
                <Text style={{ marginLeft: 10, marginBottom: 10, fontSize: 11, color: 'grey' }}> Dipuji di 97 ulasan </Text>
              </View>
            </Card>
          </ScrollView>

          <View style={{ alignSelf: 'flex-start', marginBottom: 10, marginTop: 20 }}>
            <Text style={{ fontSize: 15 }}>Fasilitas</Text>
          </View>

          <View style={{ flexDirection: 'row' }}>
            <View style={{ marginLeft: 5, width: '17%', marginRight: 25 }}>
              {dataDetail.amenities && (
                <>
                  <Thumbnail style={{ backgroundColor: 'grey' }}
                    source={{ uri: `${APP_URL_IMAGE_ICON}/${dataDetail.amenities[0].icon}` }} />
                  <Text style={{ alignSelf: 'center', marginTop: 5 }}>{dataDetail.amenities[0].name}</Text>
                </>
              )}
            </View>
          </View>
          

          <View style={{ alignSelf: 'flex-start', marginTop: 20, marginBottom: 20 }}>
            <Text style={{ color: '#0064D2' }}>Lebih semua fasilitas</Text>
          </View>

          <View style={{ alignSelf: 'flex-start', marginBottom: 10 }}>
            <Text style={{ fontSize: 15 }}>Lokasi</Text>
          </View>


        </View>

        <Image source={usericon} style={{ width: '100%', height: 180 }} />

        <View style={{ marginLeft: 15, marginRight: 15, flexDirection: 'column' }}>
          <Card style={{ marginTop: -15 }}>
            <View style={{ flexDirection: 'row' }}>
              <YourIcon name="location" style={{ marginLeft: 10, marginTop: 10, fontSize: 25, fontWeight: 'bold' }} />
              <Text style={{ marginTop: 10, fontSize: 15 }}>{dataDetail.name}</Text>
            </View>
            <View>
              <Text style={{ marginLeft: 35, fontSize: 13, color: '#48443B', marginBottom: 10 }}>
                {dataDetail.address} </Text>
            </View>
          </Card>

          <View style={{ alignSelf: 'flex-start', marginBottom: 10, marginTop: 20 }}>
            <Text style={{ fontSize: 15 }}>Tentang hotel ini</Text>
          </View>

          <View style={{ alignSelf: 'flex-start', marginBottom: 10, marginTop: 10 }}>
            <Text style={{ fontSize: 13, color: 'grey' }}>{dataDetail.name} adalah ...</Text>
          </View>

          <View style={{ alignSelf: 'flex-start', marginTop: 20, marginBottom: 20 }}>

            <TouchableOpacity onPress={() => { this.setState({ visible: true }) }}>
              <Text style={{ color: '#0064D2' }}>Selengkapnya</Text>
            </TouchableOpacity>

          </View>

          <Modal
            visible={this.state.visible}
            modalTitle={<ModalTitle title="OYO 1144 Aquina House" />}
            modalAnimation={new SlideAnimation({
              slideFrom: 'bottom',
            })}
            onTouchOutside={() => {
              this.setState({ visible: false });
            }}
          >
            <ModalContent>
              <Text style={{ marginTop: 10 }}>{dataDetail.description}</Text>

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
                  <TouchableOpacity onPress={() => this.props.navigation.navigate('ListRoom')}
                    style={styles.buttonLogin}>
                    <Text style={styles.buttonText}>PILIH KAMAR</Text>
                  </TouchableOpacity>
                </View>
              </View>
              {/* <FootersDetail /> */}
            </ModalContent>
          </Modal>

        </View>

      </>
    )
  }
}

export default BodyDetail