import React, { Component } from 'react'
import { Provider as PaperProvider } from 'react-native-paper'

import { Provider } from 'react-redux'
import storage from './src/redux/store'
import { PersistGate } from 'redux-persist/integration/react'
import Routes from './src/config/routes';

const { store, persistor } = storage()

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <PaperProvider>
            <Routes />
          </PaperProvider>
        </PersistGate>
      </Provider>
    )
  }
}
