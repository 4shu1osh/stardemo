import * as React from 'react';
import {Provider as PaperProvider} from 'react-native-paper';
import store from './src/redux/store';
import Routes from './src/routes';
import {Provider} from 'react-redux';

export default function App() {
  return (
    <Provider store={store}>
      <PaperProvider>
        <Routes/>
      </PaperProvider>
   </Provider>
  );
}
