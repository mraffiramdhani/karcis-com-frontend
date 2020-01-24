/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Icons from 'react-native-vector-icons/AntDesign';
import {Left, Container, Accordion} from 'native-base';

class ListHist extends Component {
  render() {
    const dataArray = [
      {title: 'Rp. 2.000.000,-', content: '20 Januari 2020'},
      {title: 'Rp. 1.000.000,-', content: '15 Januari 2020'},
      {title: 'Rp. 1.500.000,-', content: '10 Januari 2020'},
    ];
    return (
      <Container>
        <Accordion dataArray={dataArray} />
      </Container>
    );
  }
}

export default ListHist
