import { fromJS } from 'immutable';

import {
    FETCH_POSTS_REQUEST,
    FETCH_POSTS_SUCCESS,
    FETCH_POSTS_FAILURE,
} from './constants';

const initialState = fromJS({
    loading: false,
    error: false,
    posts: {},
});

function HomeReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_POSTS_REQUEST:
            return state
                .set('loading', true)
                .set('error', false);
        case FETCH_POSTS_SUCCESS: {
            return state
                .set('loading', false)
                .set('error', false)
                .set('posts', fromJS(action.posts));
        }
        case FETCH_POSTS_FAILURE:
            return state
                .set('loading', false)
                .set('error', true);
        default:
            return state;
    }
}

export default HomeReducer;