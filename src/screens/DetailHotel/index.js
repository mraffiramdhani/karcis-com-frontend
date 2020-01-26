import React, { Component } from 'react'
import { Text, View, Image, Dimensions, StyleSheet } from 'react-native'
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';
import CarouselImage from '../../components/DetailHotel/CarouselImage';
import HeaderDetail from '../../components/DetailHotel/HeaderDetail';
import BodyDetail from '../../components/DetailHotel/BodyDetail';
import FootersDetail from '../../components/DetailHotel/FootersDetail';

class DetailHotel extends Component {

render() {
  return (
      <>
      <HeaderDetail />
      <ScrollView style={{marginTop: -50}}>
        <CarouselImage />
        <BodyDetail />
        </ScrollView>
        <FootersDetail />
    </>
  );
}
}

export default DetailHotel