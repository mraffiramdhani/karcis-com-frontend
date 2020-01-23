import React, { Component } from 'react'
import { Provider as PaperProvider } from 'react-native-paper'

import Routes from './src/config/routes';

export default class App extends Component {
  render() {
    return (
      <PaperProvider>
        <Routes />
      </PaperProvider>
    )
  }
}

