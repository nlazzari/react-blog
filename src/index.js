import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router/immutable';
import store, { history } from './store';
import App from './containers/App/index';

// import 'sanitize.css/sanitize.css'
import './index.css';

import '../node_modules/bulma/css/bulma.min.css';

const target = document.querySelector('#root');

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <App />
      </div>
    </ConnectedRouter>
  </Provider>,
  target
);

