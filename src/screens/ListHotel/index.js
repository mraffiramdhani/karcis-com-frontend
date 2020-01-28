import React, { Component } from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'
import HeaderList from '../../components/ListHotel/HeaderList';
import BodyList from '../../components/ListHotel/BodyList';
import { connect } from 'react-redux'
import { getHotel } from '../../redux/action/hotel';
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



  // componentDidUpdate(prevProps, prevState) {
  //   if (prevState.searchValue !== this.state.searchValue) {
  //     if (this.state.searchValue.length >= 3) {
  //       this.props.dispatch(getHotel({ name: this.state.searchValue }))
  //     }
  //     else if (this.state.searchValue.length === 0) {
  //       this.props.dispatch(getHotel());
  //     }
  //   }
  // }

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
            <BodyList hotel={hotel} orderData={orderData} />
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