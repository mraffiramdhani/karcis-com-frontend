import React, {Component} from 'react';
import {View, Image} from 'react-native';
import usericon from '../../image/beforehistory.jpg';

class BodyHistory extends Component {
  render() {
    return (
      <View>
        <View>
          <Image source={usericon} style={{height: 300, width: '100%'}} />
        </View>
      </View>
    );
  }
}

export default BodyHistory;
