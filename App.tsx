import * as React from 'react';
import {Provider as PaperProvider} from 'react-native-paper';
import {store, persistor} from './src/redux/store';
import Routes from './src/routes';
import {Provider} from 'react-redux';
import {LogBox} from 'react-native';
import {PersistGate} from 'redux-persist/lib/integration/react';

LogBox.ignoreLogs([
  'Non-serializable values were found in the navigation state',
]);

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <PaperProvider>
          <Routes />
        </PaperProvider>
      </PersistGate>
    </Provider>
  );
}
