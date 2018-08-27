import {
    FETCH_ALL_POSTS_REQUEST,
    FETCH_ALL_POSTS_SUCCESS,
    FETCH_ALL_POSTS_FAILURE
} from './constants';

export function fetchPostsRequest() {
    return {
        type: FETCH_ALL_POSTS_REQUEST,
    };
}

export function fetchPostsSuccess(posts) {
    return {
        type: FETCH_ALL_POSTS_SUCCESS,
        posts,
    };
}

export function fetchPostsFailure() {
    return {
        type: FETCH_ALL_POSTS_FAILURE,
    };
}