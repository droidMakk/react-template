import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
// import 'material-components-web/material-components-web.scss';  
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.register();
