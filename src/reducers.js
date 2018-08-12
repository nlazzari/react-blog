import { combineReducers } from 'redux-immutable';

import HomeReducer from './containers/Home/reducer';

export default combineReducers({
  Home: HomeReducer,
});
