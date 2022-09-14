/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import type { Node } from "react";
import React from "react";
import { useColorScheme } from "react-native";
import { persistStore } from 'redux-persist'
import { Colors } from "react-native/Libraries/NewAppScreen";
import Router from "./app/Router";
import { Provider } from "react-redux";
import store from './app/store/configureStore'
import { PersistGate } from "redux-persist/integration/react";

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';


  const persistor = persistStore(store)
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router/>
      </PersistGate>
    </Provider>
  );
};



export default App;
