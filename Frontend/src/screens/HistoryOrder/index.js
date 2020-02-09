import React, {Component} from 'react';
import {View} from 'react-native';
import HeaderHistory from '../../components/HistoryOrder/HeaderHistory';
import BodyHistory from '../../components/HistoryOrder/BodyHistory';
import OrderHistory from '../../components/HistoryOrder/OrderHistory';

export default class HistoryOrder extends Component {
  render() {
    return (
      <View>
        <HeaderHistory />
        {/* <BodyHistory /> */}
        <OrderHistory />
      </View>
    );
  }
}
