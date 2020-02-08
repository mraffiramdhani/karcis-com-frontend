import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native'
import { Left, Input, Item, CardItem } from 'native-base';
import Icon from 'react-native-vector-icons/Octicons';
import { ScrollView } from 'react-native-gesture-handler';
import { withNavigation } from 'react-navigation'
import rupiahFormat from '../../utils/rupiahFormat'

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#eee',
    padding: 5,
  },
  banner: {
    height: 100,
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
  image: {
    width: '100%',
    height: 60,
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 5,
  },
  buttonLogin: {
    backgroundColor: 'yellow',
    borderRadius: 20,
    height: 25,
    width: 80,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 70
  },
  buttonText: {
    color: '#0064D2',
    fontSize: 15,
  },
});

class BodyRooms extends Component {
  constructor(props) {
    super(props);
  
    this.state = {};
  }

  render() {
    const { dataRooms, orderData } = this.props
    return (
      <ScrollView>
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity style={{
            margin: '3%', backgroundColor: '#fff',
            borderColor: 'grey', borderWidth: 1, width: "10%",
            alignItems: 'center'
          }}>
            <Text style={{ margin: 3, color: '#0064D2' }}>TV</Text>
          </TouchableOpacity>

          <TouchableOpacity style={{
            margin: '3%', backgroundColor: '#fff',
            borderColor: 'grey', borderWidth: 1, width: "20%",
            alignItems: 'center'
          }}>
            <Text style={{ margin: 3, color: '#0064D2' }}>Extra Bed</Text>
          </TouchableOpacity>

          <TouchableOpacity style={{
            margin: '3%', backgroundColor: '#fff',
            borderColor: 'grey', borderWidth: 1, width: "15%",
            alignItems: 'center'
          }}>
            <Text style={{ margin: 3, color: '#0064D2' }}>Parkir</Text>
          </TouchableOpacity>

          <TouchableOpacity style={{
            margin: '3%', backgroundColor: '#fff',
            borderColor: 'grey', borderWidth: 1, width: "20%",
            alignItems: 'center'
          }}>
            <Text style={{ margin: 3, color: '#0064D2' }}>Sarapan</Text>
          </TouchableOpacity>
        </View>
        {dataRooms.isLoading == false && dataRooms.data.rooms.map((v,i) => (
            <Item style={{ backgroundColor: '#fff' }} key={i}>
              <View style={{ margin: '3%' }}>
                <View>
                  <Text>{v.name}</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                  <CardItem style={{ width: 80, paddingLeft: 0, paddingRight: 10 }}>
                    <Image style={styles.image} source={require('../../image/aquinahouse.jpg')} />
                  </CardItem>
                  <View>
                    <View style={{ flexDirection: 'row', marginTop: 10 }}>
                      <Text style={{ fontSize: 12 }}>Maks {v.capacity} Tamu </Text>
                      <Icon name="primitive-dot" style={{ color: 'grey', marginTop: 3, marginLeft: 5, marginRight: 5 }} />
                      <Text style={{ fontSize: 12 }}>Pembatalan Gratis</Text>
                    </View>
                    <View style={{ flexDirection: 'row', marginTop: 5 }}>
                      <Left>
                        <Text style={{ color: 'grey', fontSize: 10 }}>{v.amenities[0].name}</Text>
                        <Text style={{ color: 'grey', fontSize: 10 }}>{v.amenities[1].name}</Text>
                      </Left>
                      <View>
                        <Text style={{ color: 'grey', fontSize: 10 }}>{v.amenities[2].name}</Text>
                        <Text style={{ color: 'grey', fontSize: 10 }}>{v.amenities[3].name}</Text>
                      </View>
                    </View>
                  </View>
                </View>
                <View style={{ flexDirection: 'row' }}>
                  <View style={{ flexDirection: 'row' }}>
                    <Text style={{ color: '#0064D2', fontSize: 15 }}>{rupiahFormat(v.cost, 'Rp. ')}</Text>
                    <Text style={{ fontSize: 13, color: 'grey', marginLeft: 3 }}>/kamar/malam</Text>
                  </View>
                  <View>
                    <TouchableOpacity
                      onPress={() => this.props.handleRoomOrder(v.room_type_id, orderData, v.cost)}
                      style={styles.buttonLogin}>
                      <Text style={styles.buttonText}>PILIH</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </Item>
        ))}
      </ScrollView>
    )
  }
}

const BodyRoom = withNavigation(BodyRooms)
export default BodyRoom