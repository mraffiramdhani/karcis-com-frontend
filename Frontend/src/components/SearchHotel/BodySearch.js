/* eslint-disable no-undef */
import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { Card, Item, Input, DatePicker, Right } from 'native-base';
import Icons from 'react-native-vector-icons/AntDesign';
import Icon from 'react-native-vector-icons/EvilIcons';
import MyIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { withNavigation } from 'react-navigation'
import { connect } from 'react-redux';
import { setCheckIn, setCheckOut } from '../../redux/action/hotelSearch';

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#eee',
    padding: 5,
  },
  banner: {
    height: 150,
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
  iconBody: {
    fontSize: 30,
    color: '#0064D2',
    marginLeft: -5,
    marginBottom: 10
  },
  iconFilter: {
    fontSize: 20,
    color: '#0064D2',
  },
  iconDoor: {
    fontSize: 20,
    color: '#0064D2',
    marginTop: 10,
    marginBottom: 10
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
  card: {
    height: '73%',
    width: '90%',
    borderRadius: 10,
    justifyContent: 'flex-start',
    alignSelf: 'center',
    // marginTop: '-27%'
  },
  buttonLogin: {
    backgroundColor: 'yellow',
    borderRadius: 50,
    height: '40%',
    width: 300,
    padding: 20,
    marginTop: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#0064D2',
    fontSize: 17,
  },
  image: {
    width: 250,
    height: 90,
    flex: 1,
    marginLeft: 15,
    marginRight: 15,
    backgroundColor: '#fff',
    borderRadius: 5,
    elevation: 5

  }
});

class BodySearchs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chosenDate1: new Date(),
      chosenDate2: new Date(),
      daterange: 1
    };
    this.setDate1 = this.setDate1.bind(this);
    this.setDate2 = this.setDate2.bind(this);
  }

  setDate1(newDate) {
    const dateNow = new Date();
    if(this.state.chosenDate2 < dateNow || this.state.chosenDate2 <= this.state.chosenDate1){
      this.props.dispatch(setCheckIn(newDate));
      this.setState({ chosenDate1: newDate, daterange: 0 });
    }
    else {
      this.props.dispatch(setCheckIn(newDate));
      this.setState({ chosenDate1: newDate });
      const range = (this.state.chosenDate2 - this.state.chosenDate1) / (1000 * 3600 * 24)
      this.setState({ daterange: range });
    }
  }
  setDate2(newDate) {
    if (this.state.chosenDate1 < newDate) {
      this.props.dispatch(setCheckOut(newDate));
      this.setState({ chosenDate2: newDate });
      const range = (this.state.chosenDate2 - this.state.chosenDate1) / (1000 * 3600 * 24)
      this.setState({ daterange: range })
    } else {
      this.props.dispatch(setCheckOut(newDate));
      this.setState({ chosenDate2: newDate, daterange: 0 });
    }
    if (newDate < this.state.chosenDate1) {
      this.props.dispatch(setCheckOut(new Date()));
      this.setState({ chosenDate2: new Date() })
    }
  }

  _handleSearch = () => {
    const { chosenDate1, chosenDate2, daterange } = this.state
    this.props.onSearchPressed(chosenDate1, chosenDate2, daterange)
  }

  render() {

    return (
      <>
        <Card style={styles.card}>
          <View style={{ marginTop: 10 }}>
            <View style={{ marginLeft: 10, marginBottom: 10 }}>
              <Text style={{ fontSize: 14, color: 'grey', }}>Nginep ke mana ?</Text>
            </View>

            <TouchableOpacity onPress={() => this.props.navigation.navigate('ListLocation')}>
              <Item inlineLabel style={{ marginLeft: 10, marginRight: 10 }}>
                <Icon name="location" style={styles.iconBody} />
                {
                  this.props.hotelSearch.city_name &&
                  <Text style={{fontSize: 16, marginBottom: 10}} > {this.props.hotelSearch.city_name} </Text>
                }
              </Item>
            </TouchableOpacity>

            <View style={{ marginLeft: 10, marginTop: 10 }}>
              <Text style={{ fontSize: 14, color: 'grey' }}>Check-in</Text>
            </View>

            <Item inlineLabel style={{ marginLeft: 10, marginRight: 10 }}>
              <Icons name="calendar" style={styles.iconFilter} />
              <DatePicker
                minimumDate={new Date()}
                maximumDate={new Date(2021, 12, 31)}
                locale={"en"}
                timeZoneOffsetInMinutes={undefined}
                modalTransparent={false}
                animationType={"fade"}
                androidMode={"default"}
                placeHolderText="Pilih Tanggal"
                placeholderTextColor="black"
                textStyle={{ color: "green" }}
                placeHolderTextStyle={{ color: "#d3d3d3" }}
                onDateChange={this.setDate1}
                disabled={false}
              />
              <Text>
                Date: {this.state.chosenDate1.toString().substr(4, 12)}
              </Text>
            </Item>

            <View style={{ marginLeft: 10, marginTop: 10, flexDirection: 'row' }}>
              <Text style={{ fontSize: 14, color: 'grey' }}>Check-out</Text>
              <Right>
                <Text style={{ fontSize: 14, color: 'grey', marginRight: 10 }}>{this.state.daterange} malam</Text>
              </Right>
            </View>

            <Item inlineLabel style={{ marginLeft: 10, marginRight: 10 }}>
              <Icons name="calendar" style={styles.iconFilter} />
              <DatePicker
                minimumDate={new Date()}
                maximumDate={new Date(2021, 12, 31)}
                locale={"en"}
                timeZoneOffsetInMinutes={undefined}
                modalTransparent={false}
                animationType={"fade"}
                androidMode={"default"}
                placeHolderText="Pilih Tanggal"
                placeholderTextColor="black"
                textStyle={{ color: "green" }}
                placeHolderTextStyle={{ color: "#d3d3d3" }}
                onDateChange={this.setDate2}
                disabled={false}
              />
              <Text>
                Date: {this.state.chosenDate2.toString().substr(4, 12)}
              </Text>
            </Item>

            <View style={{ marginLeft: 10, marginTop: 10 }}>
              <Text style={{ fontSize: 14, color: 'grey' }}>Kamar & Tamu</Text>
            </View>


            <Item inlineLabel style={{ marginLeft: 10, marginRight: 10, flexDirection: 'row' }}>
              <MyIcon name="door-open" style={styles.iconDoor} />
              <TouchableOpacity onPress={() => this.props.onRoomPickerPressed()}>
                <Text style={{ fontSize: 16, marginTop: 10, marginBottom: 10 }} disabled> <Text> {this.props.room} </Text>Kamar </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.props.onPersonPickerPressed()}>
                <Text style={{ fontSize: 16, marginTop: 10, marginBottom: 10 }} disabled> <Text> {this.props.person} </Text>Tamu </Text>
              </TouchableOpacity>
            </Item>

            <View style={{ marginLeft: 10, marginTop: 10 }}>
              <Text style={{ fontSize: 14, color: 'grey' }}>Filter</Text>
            </View>

            <Item inlineLabel style={{ marginLeft: 10, marginRight: 10 }}>
              <Icons keyboardType='number-pad' name="filter" style={styles.iconFilter} />
              <Input keyboardType='number-pad' style={{ fontSize: 16 }} placeholder="Min (IDR)" placeholderTextColor='grey' />
              <Input keyboardType='number-pad' style={{ fontSize: 16 }} placeholder="Max (IDR)" placeholderTextColor='grey' />
            </Item>

            <View style={{ alignItems: 'center', marginTop: 10 }}>
              <TouchableOpacity onPress={this._handleSearch} style={styles.buttonLogin}>
                <Text style={styles.buttonText}>CARI HOTEL</Text>
              </TouchableOpacity>
            </View>

          </View>
        </Card>
      </>

    )
  }
}

const BodySearch = withNavigation(BodySearchs);

const mapStateToProps = state => {
  return {
    hotelSearch: state.hotelSearch,
    city: state.city
  }
}

export default connect(mapStateToProps)(BodySearch)
