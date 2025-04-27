import * as React from "react";
import { Provider as ReduxProvider } from 'react-redux'
import { persistedStore, store } from './store'
import { PersistGate } from 'redux-persist/integration/react'
import { Persistor } from 'redux-persist'

export default function StoreProvider({ children }: { children: JSX.Element }) {
  return (
    <PersistGate persistor={persistedStore as Persistor}>
      <ReduxProvider store={store}>{children}</ReduxProvider>
    </PersistGate>
  )
}
