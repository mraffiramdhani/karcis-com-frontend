/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Icons from 'react-native-vector-icons/AntDesign';
import {Left, Container, Accordion} from 'native-base';
import HeaderFormHist from '../../../components/TopUp/FormHistory/HeaderFormHist';
import ListHist from '../../../components/TopUp/FormHistory/ListHist';

export default class FormHistory extends Component {
  render() {
    return (
      <>
        <HeaderFormHist />
        <ListHist />
      </>
    );
  }
}
