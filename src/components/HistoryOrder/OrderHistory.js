/* eslint-disable react/prop-types */
/* eslint-disable react-native/no-inline-styles */

import React, { Component } from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';
import { Card, CardItem, Text, Body, Left } from 'native-base';
import Icons1 from 'react-native-vector-icons/FontAwesome';
import MyIcon from 'react-native-vector-icons/Entypo';
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';
import { connect } from 'react-redux';
import { withNavigationFocus } from 'react-navigation';
import { getHotelOrderHistory } from '../../redux/action/hotelOrder';

const styles = StyleSheet.create({
  icon: {
    fontSize: 20,
    color: '#eee',
  },
  row: {
    flexDirection: 'row',
  },
  metode: {
    backgroundColor: '#eee',
    borderRadius: 10,
    height: 30,
    width: 150,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    color: 'grey',
    fontSize: 12,
    marginLeft: 5,
  },
});

class OrderHistories extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: false,
      isSuccess: false,
    }
  }

  componentDidMount() {
    const jwt = this.props.auth.data.token;
    this.props.dispatch(getHotelOrderHistory(jwt));
    this.props.navigation.addListener('didFocus', () => this.onFocus(jwt));
  }

  onFocus(jwt) {
    this.props.dispatch(getHotelOrderHistory(jwt));
  }

  async componentDidUpdate(prevProps) {
    if (prevProps.hotelOrder.isLoading !== this.state.isLoading && this.props.navigation.isFocused()) {
      if (prevProps.hotelOrder.isLoading) {
        this.setState({ isLoading: true });
      }
      else {
        this.setState({ isLoading: false, isSuccess: prevProps.hotelOrder.isSuccess });
      }
    }
  }

  render() {
    return (
      <ScrollView>
        {
          this.props.hotelOrder.isLoading &&
          <ActivityIndicator size="large" color="blue" />
        }
        {
          !this.state.isLoading && this.props.hotelOrder.data.map((v, i) => {
            return (
              <Card key={i}>
                <CardItem bordered>
                  <Left>
                    <Icons1
                      name="hotel"
                      style={{
                        marginRight: 5,
                        fontSize: 20,
                        color: 'red',
                      }}
                    />
                    <Text>Hotel</Text>
                  </Left>
                  <TouchableOpacity>
                    <MyIcon name="dots-three-vertical" style={styles.icon} />
                  </TouchableOpacity>
                </CardItem>
                <CardItem bordered>
                  <Body>
                    <View>
                      <Text style={{ color: 'grey' }}>Order ID : {(v.id).toString().padStart(3, "0")}</Text>
                    </View>

                    <View style={{ marginTop: 5 }}>
                      <Text style={{ fontSize: 16 }}>{v.hotel}</Text>
                    </View>

                    <View style={{ marginTop: 5 }}>
                      <Text style={{ color: 'grey' }}>
                        {v.guest_count} Tamu
                    <MyIcon name="dot-single" style={{ fontSize: 20 }} />
                        <Text style={{ color: 'grey' }}> {v.room_count} Kamar </Text>
                      </Text>
                    </View>

                    <View style={({ marginTop: 5 }, styles.row)}>
                      <Icons1
                        name="calendar"
                        style={{
                          fontSize: 15,
                          marginTop: 5,
                          marginRight: 5,
                          color: 'grey',
                        }}
                      />
                      <Text style={{ color: 'grey' }}>
                        {new Date(v.check_in).toDateString()}
                        <MyIcon name="dot-single" style={{ fontSize: 20 }} />
                        <Text style={{ color: 'grey' }}> 1 Malam </Text>
                      </Text>
                    </View>

                    <TouchableOpacity style={styles.metode}>
                      <Text style={styles.buttonText}>Pesanan Kadaluarsa</Text>
                    </TouchableOpacity>
                  </Body>
                </CardItem>
              </Card>
            )
          })
        }
      </ScrollView>
    );
  }
}

const mapStateToProps = state => {
  return {
    hotelOrder: state.hotelOrder,
    auth: state.auth
  }
}

const OrderHistory = withNavigationFocus(OrderHistories)

export default connect(mapStateToProps)(OrderHistory)