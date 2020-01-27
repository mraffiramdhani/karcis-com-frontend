import React, { Component } from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'
import HeaderList from '../../components/ListHotel/HeaderList';
import BodyList from '../../components/ListHotel/BodyList';
import { connect } from 'react-redux'
import { getHotel } from '../../redux/action/hotel';
import { withNavigation } from 'react-navigation';

class ListHotelOriginal extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchValue: '',
      hotel: {}
    };
  }

componentDidMount() {
    this.props.dispatch(getHotel())
  }
  
  async handleInputSearch(e) {
    await this.setState({ searchValue: e });
    // console.log(this.state.searchValue)
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
      return (
      <View>
        <HeaderList onInputSearch={(e) => this.handleInputSearch(e)} />
        <BodyList hotel={this.props.hotel} orderData={orderData} />
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