import React, { Component } from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'
import { Left, Input, Item, Right, Card, CardItem } from 'native-base'
import Icons from 'react-native-vector-icons/Entypo';
import Icon from 'react-native-vector-icons/Fontisto';
import MyIcon from 'react-native-vector-icons/EvilIcons';
import MyIcons from 'react-native-vector-icons/FontAwesome';
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';
import StarRating from 'react-native-star-rating';
import { withNavigation } from 'react-navigation';
import { connect } from 'react-redux';

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
});

class HeaderListOriginal extends Component {
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
                    marginRight: 220,
                    marginTop: 2,
                  }}>
                  {' '}
                  {this.props.hotelSearch.city_name}
                </Text>
              </Left>
              <Icons name="cross" style={styles.icon} onPress={() => this.props.navigation.goBack()} />
            </View>
          </View>
          <View style={{ backgroundColor: 'white', borderRadius: 5, width: '90%', height: '30%', alignSelf: 'center', flexDirection: 'row' }}>
            <MyIcon name="location" style={{ color: 'grey', fontSize: 30, marginTop: '2.5%' }} />
            <Input onChangeText={(e) => this.props.onInputSearch(e)} placeholder='Nginep ke mana?' style={{ marginLeft: '1%', marginTop: '-2%' }} ></Input>
            <TouchableOpacity>
              <Icon name="search" style={{ color: 'grey', fontSize: 25, marginTop: 5, marginRight: '2%' }} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    )
  }
}

const HeaderList = withNavigation(HeaderListOriginal);

const mapStateToProps = state => {
  return {
    hotelSearch: state.hotelSearch
  }
}

export default connect(mapStateToProps)(HeaderList)