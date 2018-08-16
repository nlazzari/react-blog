import { call, put, takeEvery } from 'redux-saga/effects';
import Api from '../../common/api';

import { FETCH_POSTS_REQUEST } from './constants';
import { fetchPostsSuccess, fetchPostsFailure } from './actions';

export function* fetchPostsSaga() {
    yield takeEvery(FETCH_POSTS_REQUEST, function* fetchPosts() {
        const results = yield call(Api.get, ['/posts/summaries']);

        if (results.data) {
            const posts = results.data;
            yield put(fetchPostsSuccess(posts));
        } else {
            yield console.log('There was an error fetching posts.');
            yield put(fetchPostsFailure());
        }
    });
}

export default [
    fetchPostsSaga,
];