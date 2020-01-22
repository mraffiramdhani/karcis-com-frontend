import React, {Component} from './node_modules/react';
import Headers from '../../component/MyOrder/Headers';
import TabCard from '../../component/MyOrder/TabCard';

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
