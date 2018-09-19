import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router/immutable';
import store, { history } from './store';
import App from './containers/App';
import ScrollToTop from './containers/ScrollToTop';
import './index.css';
import '../node_modules/bulma/css/bulma.min.css';

const target = document.querySelector('#root');
console.log('### process.env.NODE_ENV: ', process.env.NODE_ENV);

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <ScrollToTop>
          <App />
        </ScrollToTop>
      </div>
    </ConnectedRouter>
  </Provider>,
  target
);

