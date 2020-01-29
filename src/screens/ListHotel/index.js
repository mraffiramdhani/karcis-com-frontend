import React, { Component } from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'
import HeaderList from '../../components/ListHotel/HeaderList';
import BodyList from '../../components/ListHotel/BodyList';
import { connect } from 'react-redux'
import { getHotel } from '../../redux/action/hotel';
import { setHotel } from '../../redux/action/order';
import { withNavigation } from 'react-navigation';

import LoadingScreen from '../../components/LodingScreen';

class ListHotelOriginal extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchValue: '',
    };
  }

  async componentDidMount() {
    await this.props.dispatch(getHotel())
  }

  async handleInputSearch(e) {
    await this.setState({ searchValue: e });
  }

  handleHotelPressed(id, cost, orderData){
    console.log(id, cost, orderData)
    this.props.dispatch(setHotel(id));
    this.props.navigation.navigate('DetailHotel', {id, cost, orderData});
  }

  render() {
    const orderData = this.props.navigation.getParam('orderData')
    const { hotel } = this.props
    const { isLoading, count, isSuccess } = this.props.hotel
    return (
      <View>
        {isLoading == true && (
          <LoadingScreen />
        )}
        {count > 0 && isSuccess == true && (
          <View>
            <HeaderList onInputSearch={(e) => this.handleInputSearch(e)} />
            <BodyList onHotelPressed={(id, cost, orderData) => this.handleHotelPressed(id, cost, orderData)} hotel={hotel} orderData={orderData} />
          </View>
        )}
      </View>
    )
  }
}

const mapStateToProps = state => {
  return {
    hotel: state.hotel
  }
}

const ListHotel = withNavigation(ListHotelOriginal)

export default connect(mapStateToProps)(ListHotel);