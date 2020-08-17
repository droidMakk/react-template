import React from 'react';

import './App.scss';
import RouteApp from './routes';
import { Provider } from 'store';

function App() {
  return (
        <Provider>
          <RouteApp />
        </Provider>
  );
}

export default App;
