import { createStore, applyMiddleware, compose } from 'redux';
import { connectRouter, routerMiddleware } from 'connected-react-router/immutable';
import { fromJS } from 'immutable';
import createSagaMiddleware from 'redux-saga';
import createHistory from 'history/createBrowserHistory';
import reducers from './reducers';
import globalSagas from './sagas';

export const history = createHistory();
const sagaMiddleware = createSagaMiddleware();

const initialState = {};
const enhancers = [];
const middleware = [sagaMiddleware, routerMiddleware(history)];

if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension());
  }
}

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers
);


const store = createStore(
  connectRouter(history)(reducers),
  fromJS(initialState),
  composedEnhancers
);

sagaMiddleware.run(globalSagas);

export default store;
