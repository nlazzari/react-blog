import {
    FETCH_POST_REQUEST,
    FETCH_POST_SUCCESS,
    FETCH_POST_FAILURE
} from './constants';

export function fetchPostRequest(data) {
    return {
        type: FETCH_POST_REQUEST,
        data,
    };
}

export function fetchPostSuccess(post) {
    return {
        type: FETCH_POST_SUCCESS,
        post,
    };
}

export function fetchPostFailure() {
    return {
        type: FETCH_POST_FAILURE,
    };
}