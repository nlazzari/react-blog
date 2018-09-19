import { call, put, takeEvery } from 'redux-saga/effects';
import Api from '../../common/api';

import { FETCH_ALL_CATEGORY_POSTS_REQUEST } from './constants';
import { fetchCategoryPostsSuccess, fetchCategoryPostsFailure } from './actions';

export function* fetchCategoryPostsSaga() {
    yield takeEvery(FETCH_ALL_CATEGORY_POSTS_REQUEST, function* fetchCategoryPosts(action) {
        const { category } = action || {};
        const results = yield call(Api.get, [`/posts/summaries/${category}`]);

        if (results.data) {
            const posts = results.data;
            yield put(fetchCategoryPostsSuccess(posts));
        } else {
            yield console.log(`There was an error fetching posts for category '${category}'.`);
            yield put(fetchCategoryPostsFailure());
        }
    });
}

export default [
    fetchCategoryPostsSaga,
];