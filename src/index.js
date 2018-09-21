import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router/immutable';
import store, { history } from './store';
import App from './containers/App';
import { Helmet } from 'react-helmet';
import ScrollToTop from './containers/ScrollToTop';
import './index.css';
import '../node_modules/bulma/css/bulma.min.css';

const target = document.querySelector('#root');

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <Helmet>
          <title>react-blog</title>
        </Helmet>
        <ScrollToTop>
          <App />
        </ScrollToTop>
      </div>
    </ConnectedRouter>
  </Provider>,
  target
);

