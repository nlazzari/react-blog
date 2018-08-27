import { fromJS } from 'immutable';

import {
    FETCH_POST_REQUEST,
    FETCH_POST_SUCCESS,
    FETCH_POST_FAILURE,
} from './constants';

const initialState = fromJS({
    loading: false,
    error: false,
    post: {},
});

function PostReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_POST_REQUEST:
            return state
                .set('loading', true)
                .set('error', false);
        case FETCH_POST_SUCCESS: {
            const { post } = action;
            return state
                .set('loading', false)
                .set('error', false)
                .setIn(['post', `post/${post.id}`], fromJS(post));
        }
        case FETCH_POST_FAILURE:
            return state
                .set('loading', false)
                .set('error', true)
                .set('post', fromJS({}));
        default:
            return state;
    }
}

export default PostReducer;