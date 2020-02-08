import React, { Component } from 'react'
import { Text, View, StyleSheet, ActivityIndicator } from 'react-native'
import { Item } from 'native-base'
import MyIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';
import HeaderLoc from '../../components/ListLocation/HeaderLoc';
import { connect } from 'react-redux';
import { setCityId, nearMeParam } from '../../redux/action/hotelSearch';
import { withNavigation } from 'react-navigation';

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
  searchBar: {
    marginTop: '-20%',
    backgroundColor: '#fff'
  }
});

class BodyLocOriginal extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: true
    }
  }

  handleSelectCity(city_id, city_name){
    this.props.dispatch(setCityId(city_id, city_name));
    this.props.navigation.goBack();
  }

  handleNearMe(){
    this.props.dispatch(nearMeParam());
    this.props.navigation.goBack();
  }
  
  render() {
    return (
      <ScrollView>
        <TouchableOpacity onPress={() => this.handleNearMe()} style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
          <MyIcons name="crosshairs-gps" style={{ color: '#0064D2', fontSize: 20, marginTop: '5%', marginBottom: '5%', marginLeft: '4%', marginRight: '2%' }} />
          <Text>Dekat saya</Text>
        </TouchableOpacity>

        <View style={{ margin: '5%' }}>
          <Text style={{ color: 'grey' }}>Tujuan Terpopuler</Text>
        </View>

        {this.props.city.isLoading &&
          <ActivityIndicator color="blue" size="large" />
        }
        {!this.props.city.isLoading && this.props.city.data.map((v, i) => {
          return (
            <TouchableOpacity key={v.id} onPress={() => this.handleSelectCity(v.id, v.name)}>
              <View style={{ flexDirection: 'row' }}>
                <MyIcons name="city-variant-outline" style={{ color: '#0064D2', fontSize: 20, marginLeft: '4%', marginRight: '2.5%' }} />
                <Text>{v.name}</Text>
              </View>
              <View style={{ marginBottom: '6%' }}>
                <Text style={{ marginLeft: '12%', fontSize: 12, color: 'grey' }}>Indonesia</Text>
              </View>
            </TouchableOpacity>
          )
        })}
        {
          (!this.props.city.isLoading && this.props.city.data.length === 0) &&
          <View style={{flex:1, flexDirection: 'row', justifyContent: 'center'}}>
            <Text>Data Tidak Ditemukan</Text>
          </View>
        }
      </ScrollView>
    )
  }
}

const mapStateToProps = state => {
  return {
    city: state.city,
    hotelSearch: state.hotelSearch
  }
}

const BodyLoc = withNavigation(BodyLocOriginal)

export default connect(mapStateToProps)(BodyLoc)
