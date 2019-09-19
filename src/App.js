import React from 'react';

import './App.scss';
import RouteApp from './routes';

import { GlobalProvider, NetworkProvider } from 'contexts/index';

function App() {
  return (
    <GlobalProvider>
      <NetworkProvider>
        <RouteApp />
      </NetworkProvider>
    </GlobalProvider>
  );
}

export default App;
