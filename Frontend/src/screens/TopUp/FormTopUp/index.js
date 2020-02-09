import React, {Component} from 'react';
import {Text, View} from 'react-native';
import HeaderForm from '../../../components/TopUp/FormTopUp/HeaderForm';
import BodyForm from '../../../components/TopUp/FormTopUp/BodyForm';

export default class FormTopUp extends Component {
  render() {
    return (
      <>
        <HeaderForm />
        <BodyForm />
      </>
    );
  }
}
