import React, { Component } from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'
import HeaderList from '../../components/ListHotel/HeaderList';
import BodyList from '../../components/ListHotel/BodyList';
import { connect } from 'react-redux'

import { getHotel } from '../../redux/action/hotel';

class ListHotel extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchValue: ''
    };
  }

  async handleInputSearch(e) {
    await this.setState({ searchValue: e });
  }

  componentDidMount() {
    this.props.dispatch(getHotel())
  }

  render() {
    return (
      <>
        <HeaderList onInputSearch={(e) => this.handleInputSearch(e)} />
        <BodyList hotel={this.props.hotel} />
      </>
    )
  }
}

const mapStateToProps = state => {
  return {
    hotel: state.hotel
  }
}

export default connect(mapStateToProps)(ListHotel);