import { call, put, takeEvery } from 'redux-saga/effects';
import Api from '../../common/api';

import { FETCH_POST_REQUEST } from './constants';
import { fetchPostSuccess, fetchPostFailure } from './actions';

export function* fetchSinglePostSaga() {
    yield takeEvery(FETCH_POST_REQUEST, function* fetchPost(action) {
        const actionData = action && action.data;
        const { id, title, subtitle, image, slug, author, createdAt } = actionData;
        let getApiPath = (id, bodyOnly) => bodyOnly ? `/posts/${id}/body` : `/posts/${id}`;
        let apiPath;
        let results;
        let post;

        if (id && title && subtitle && image && slug && author && createdAt) {
            apiPath = getApiPath(id, true);
        } else {
            apiPath = getApiPath(id, false);
        }

        results = yield call(Api.get, [apiPath]);
        if (results.data) {
            post = Object.assign({}, actionData, results.data);
            yield put(fetchPostSuccess(post));
        } else {
            yield console.log('There was an error fetching post.');
            yield put(fetchPostFailure());
        }
        
    });
}

export default [
    fetchSinglePostSaga,
];