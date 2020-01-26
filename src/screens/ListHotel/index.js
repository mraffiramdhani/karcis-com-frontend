import React, { Component } from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'
import HeaderList from '../../components/ListHotel/HeaderList';
import BodyList from '../../components/ListHotel/BodyList';

class ListHotel extends Component {
    render() {
        return (
            <>
            <HeaderList />
            <BodyList />
            </>
        )
    }
}

export default ListHotel