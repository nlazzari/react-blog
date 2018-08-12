import {
    FETCH_POSTS_REQUEST,
    FETCH_POSTS_SUCCESS,
    FETCH_POSTS_FAILURE
} from './constants';

export function fetchPostsRequest() {
    return {
        type: FETCH_POSTS_REQUEST,
    };
}

export function fetchPostsSuccess(posts) {
    return {
        type: FETCH_POSTS_SUCCESS,
        posts,
    };
}

export function fetchPostsFailure() {
    return {
        type: FETCH_POSTS_FAILURE,
    };
}