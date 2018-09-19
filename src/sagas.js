import { fork, all } from 'redux-saga/effects';

import HomeSagas from './containers/Home/sagas';
import PostSagas from './containers/Post/sagas';
import CategorySagas from './containers/Category/sagas';

const sagas = [
    ...HomeSagas,
    ...PostSagas,
    ...CategorySagas,
];

function* globalSagas() {
    const globalSagasForks = sagas.map((saga) => fork(saga));

    yield all([...globalSagasForks]);
}

export default globalSagas;