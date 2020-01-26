import React, { Component } from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'
import HeaderList from '../../components/ListHotel/HeaderList';
import BodyList from '../../components/ListHotel/BodyList';

import { getHotel } from '../../redux/action/hotel';

class ListHotel extends Component {
    render() {
        return (
            <>
                <HeaderList />
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