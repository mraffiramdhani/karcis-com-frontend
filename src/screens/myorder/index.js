import React, {Component} from 'react';
import Headers from '../../components/MyOrder/Headers';
import TabCard from '../../components/MyOrder/TabCard';

export default class MyOrder extends Component {
  render() {
    return (
      <>
        <Headers />
        <TabCard />
      </>
    );
  }
}
