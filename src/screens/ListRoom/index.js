import React, { Component } from 'react'
import { View } from 'react-native'
import HeaderRoom from '../../components/ListRoom/HeaderRoom';
import BodyRoom from '../../components/ListRoom/BodyRoom';
import { connect } from 'react-redux';
import { getRoom } from '../../redux/action/hotelRooms';

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
            <BodyRoom dataRooms={hotelRooms} orderData={orderData} />
          </View>
        )}
      </>
    )
  }
}

const mapStateToProps = state => {
  return {
    hotelRooms: state.hotelRooms
  }
}

export default connect(mapStateToProps)(ListRoom)
