import React, { Component } from 'react'
import { Text, View, Image, Dimensions, StyleSheet } from 'react-native'
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';
import CarouselImage from '../../components/DetailHotel/CarouselImage';
import HeaderDetail from '../../components/DetailHotel/HeaderDetail';
import BodyDetail from '../../components/DetailHotel/BodyDetail';
import FootersDetail from '../../components/DetailHotel/FootersDetail';
import { connect } from 'react-redux';
import { getHotelById } from '../../redux/action/hotel';

import LoadingScreen from '../../components/LodingScreen';

class DetailHotel extends Component {

  constructor(props) {
    super(props)
    this.state = {
      searchValue: '',
    };
  }

  async componentDidMount() {
    await this.props.dispatch(getHotelById(this.props.navigation.getParam('id')))
  }

  render() {
    const cost = this.props.navigation.getParam('cost')
    const orderData = this.props.navigation.getParam('orderData')
    const hotel = this.props.hotel.dataDetail
    const { isLoading, count, isSuccess } = this.props.hotel
    return (
      <>
        {isLoading == true && (
          <LoadingScreen />
        )}
        {count > 0 && isSuccess == true && (
          <>
            <HeaderDetail dataDetail={hotel} />
            <ScrollView style={{ marginTop: -50 }}>
              <CarouselImage />
              <BodyDetail dataDetail={hotel} cost={cost} />
            </ScrollView>
            <FootersDetail dataDetail={hotel} cost={cost} orderData={orderData} />
          </>
        )}
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
