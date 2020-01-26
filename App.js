import React, { Component } from 'react'
import { Provider as PaperProvider } from 'react-native-paper'

import { Provider as ReduxProvider } from 'react-redux'
import storage from './src/redux/store'
import { PersistGate } from 'redux-persist/integration/react'

const { store, persistor } = storage()
import Routes from './src/config/routes';

export default class App extends Component {
  render() {
    return (
      <ReduxProvider store={store}>
        <PersistGate persistor={persistor}>
          <PaperProvider>
            <Routes />
          </PaperProvider>
        </PersistGate>
      </ReduxProvider>
    )
  }
}
