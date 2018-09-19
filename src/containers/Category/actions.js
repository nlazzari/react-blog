import {
    FETCH_ALL_CATEGORY_POSTS_REQUEST,
    FETCH_ALL_CATEGORY_POSTS_SUCCESS,
    FETCH_ALL_CATEGORY_POSTS_FAILURE,
} from './constants';

export function fetchCategoryPostsRequest(category) {
    return {
        type: FETCH_ALL_CATEGORY_POSTS_REQUEST,
        category,
    };
}

export function fetchCategoryPostsSuccess(posts) {
    return {
        type: FETCH_ALL_CATEGORY_POSTS_SUCCESS,
        posts,
    };
}

export function fetchCategoryPostsFailure() {
    return {
        type: FETCH_ALL_CATEGORY_POSTS_FAILURE,
    };
}
