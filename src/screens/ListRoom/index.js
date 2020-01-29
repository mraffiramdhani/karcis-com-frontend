import React, { Component } from 'react'
import { View } from 'react-native'
import HeaderRoom from '../../components/ListRoom/HeaderRoom';
import BodyRoom from '../../components/ListRoom/BodyRoom';
import { connect } from 'react-redux';
import { getRoom } from '../../redux/action/hotelRooms';
import { setRoom } from '../../redux/action/order';

import LoadingScreen from '../../components/LodingScreen';

class ListRoom extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: false,
      isSuccess: false
    }
  }
  async componentDidMount() {
    const id = this.props.navigation.getParam('id')
    await this.props.dispatch(getRoom(id))
  }

  handleRoomOrder(id, orderData, cost){
    console.log(id, orderData, cost);
    this.props.dispatch(setRoom(id));
    this.props.navigation.navigate('FormOrder', {orderData, cost});
  }

  render() {
    const { hotelRooms } = this.props
    const { isLoading, count, isSuccess } = this.props.hotelRooms
    const orderData = this.props.navigation.getParam('orderData')
    return (
      <>
        {isLoading == true && (
          <LoadingScreen />
        )}
        {count > 0 && isSuccess == true && (
          <View>
            <HeaderRoom orderData={orderData} />
            <BodyRoom handleRoomOrder={(id, orderData, cost) => this.handleRoomOrder(id, orderData, cost)} dataRooms={hotelRooms} orderData={orderData} />
          </View>
        )}
      </>
    )
  }
}

const mapStateToProps = state => {
  return {
    hotelRooms: state.hotelRooms,
    order: state.order
  }
}

export default connect(mapStateToProps)(ListRoom)
