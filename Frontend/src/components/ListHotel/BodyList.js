import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, ActivityIndicator } from 'react-native'
import { Left, Input, Item, Right, Card, CardItem } from 'native-base'
import Icons from 'react-native-vector-icons/Entypo';
import MyIcon from 'react-native-vector-icons/EvilIcons';
import MyIcons from 'react-native-vector-icons/FontAwesome';
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';
import StarRating from 'react-native-star-rating';
import { withNavigation } from 'react-navigation';
import rupiahFormat from '../../utils/rupiahFormat'

import { APP_URL_IMAGE_HOTEL } from '../../config/Api';

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#eee',
    padding: 5,
  },
  banner: {
    height: 130,
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
  card: {
    marginTop: -25,
    width: '100%',
    borderRadius: 20,
    alignSelf: 'center',
    paddingBottom: 55
  },
  image: {
    height: 130,
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 5,
  }
});

class BodyLists extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { hotel, orderData } = this.props

    return (
      <Card style={styles.card}>
        <View style={{ marginTop: 10 }}>
          <Item inlineLabel>
            <Text style={{ marginLeft: 10, fontSize: 13, marginBottom: 15, marginTop: 10 }}>
              Menampilkan properti terbaik </Text>
          </Item>

          <ScrollView>
            {hotel.data.hotels.map(v => (
              <TouchableOpacity key={v.id} onPress={() => this.props.onHotelPressed(v.id, v.cost, orderData)}>
                <Item inlineLabel style={{ flexDirection: 'row' }}>
                  <CardItem style={{ width: '30%', paddingLeft: 10, paddingRight: 10 }}>
                    <Image style={styles.image} source={{ uri: `${APP_URL_IMAGE_HOTEL}${v.images[0].filename}` }} />
                  </CardItem>
                  <View>
                    <View>
                      <Text>{v.name}</Text>
                    </View>

                    <View style={{ width: 150, flexDirection: 'row', marginTop: 2 }}>
                      <StarRating
                        starSize={15}
                        disabled={false}
                        emptyStar={'ios-star-outline'}
                        fullStar={'ios-star'}
                        halfStar={'ios-star-half'}
                        iconSet={'Ionicons'}
                        maxStars={v.star}
                        rating={v.star}
                        fullStarColor={'yellow'} />
                      <Icons name="dot-single" style={{ color: 'grey', marginLeft: 3, fontSize: 15 }} />
                      <MyIcon name="location" style={{ color: 'grey', marginTop: 3, fontSize: 15 }} />
                      <Text style={{ color: 'grey', fontSize: 12 }}>1 km</Text>
                    </View>

                    <View style={{ width: 150, flexDirection: 'row', marginTop: 2 }}>
                      <MyIcons name="square" style={{ color: '#0064D2', marginTop: 3, fontSize: 12, marginLeft: 2 }} />
                      <Text style={{ color: 'grey', fontSize: 12, marginLeft: 3 }}>8/10</Text>
                      <MyIcons name="tripadvisor" style={{ color: 'orange', marginTop: 3, fontSize: 12, marginLeft: 10 }} />
                      <View style={{ marginLeft: 3, marginTop: 1 }}>
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

                    <View style={{ marginTop: 60, flexDirection: 'row' }}>

                      <Text style={{ color: '#0064D2', fontSize: 15 }}>{rupiahFormat(v.cost, 'Rp. ')}</Text>
                      <Text style={{ fontSize: 13, color: 'grey', marginLeft: 3 }}>/kamar/malam</Text>
                    </View>

                  </View>
                </Item>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      </Card>
    )
  }
}

const BodyList = withNavigation(BodyLists);


export default BodyList