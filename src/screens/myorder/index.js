import React, {Component} from 'react';
import Headers from '../../component/myorder/Headers';
import TabCard from '../../component/myorder/TabCard';

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
