import React, { Component } from 'react'
import { Text, View, Image, Dimensions, StyleSheet } from 'react-native'
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';
import CarouselImage from '../../components/DetailHotel/CarouselImage';
import HeaderDetail from '../../components/DetailHotel/HeaderDetail';
import BodyDetail from '../../components/DetailHotel/BodyDetail';
import FootersDetail from '../../components/DetailHotel/FootersDetail';
import { connect } from 'react-redux';
import { getHotelById } from '../../redux/action/hotel';

class DetailHotel extends Component {

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.dispatch(getHotelById(this.props.navigation.getParam('id')))
  }

  render() {
    const cost = this.props.navigation.getParam('cost')
    const orderData = this.props.navigation.getParam('orderData')
    return (
      <>
      {
        (console.log(this.props.hotel.isLoading))
      }
        <HeaderDetail dataDetail={this.props.hotel.dataDetail} />
        <ScrollView style={{ marginTop: -50 }}>
          <CarouselImage />
          <BodyDetail dataDetail={this.props.hotel.dataDetail} cost={cost} />
        </ScrollView>
        <FootersDetail dataDetail={this.props.hotel.dataDetail} cost={cost} orderData={orderData} />
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    hotel: state.hotel
  }
}

export default connect(mapStateToProps)(DetailHotel)