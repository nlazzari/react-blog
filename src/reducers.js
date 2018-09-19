import { combineReducers } from 'redux-immutable';

import HomeReducer from './containers/Home/reducer';
import PostReducer from './containers/Post/reducer';
import CategoryReducer from './containers/Category/reducer';

export default combineReducers({
  Home: HomeReducer,
  Post: PostReducer,
  Category: CategoryReducer,
});
