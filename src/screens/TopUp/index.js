import React, {Component} from 'react';
import HeaderPoint from '../../components/TopUp/HeaderPoint';
import BodyPoint from '../../components/TopUp/BodyPoint';
import ListPoint from '../../components/TopUp/ListPoint';

class TopUp extends Component {
  render() {
    return (
      <>
        <HeaderPoint />
        <BodyPoint />
        <ListPoint />
      </>
    );
  }
}

export default TopUp;
