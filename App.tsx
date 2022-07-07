import * as React from 'react';
import {Provider as PaperProvider} from 'react-native-paper';
import store from './src/redux/store';
import Routes from './src/routes';
import {Provider} from 'react-redux';
import { LogBox } from 'react-native';
import Triangle from './src/utils/triangle';

LogBox.ignoreLogs([
  'Non-serializable values were found in the navigation state',
]);

export default function App() {
  return (
    <Provider store={store}>
      <PaperProvider>
        <Routes/>
      </PaperProvider>
   </Provider>
  );
}
