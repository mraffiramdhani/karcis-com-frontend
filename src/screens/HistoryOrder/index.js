import React, {Component} from 'react';
import {View} from 'react-native';
import HeaderHistory from '../../components/HistoryOrder/HeaderHistory';
import BodyHistory from '../../components/HistoryOrder/BodyHistory';
import FilterButton from '../../components/HistoryOrder/FilterButton';

export default class HistoryOrder extends Component {
  render() {
    return (
      <View>
        <HeaderHistory />
        <BodyHistory />
        <FilterButton />
      </View>
    );
  }
}
