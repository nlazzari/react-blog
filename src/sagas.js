import { fork, all } from 'redux-saga/effects';

import HomeSagas from './containers/Home/sagas';
import PostSagas from './containers/Post/sagas';


const sagas = [
    ...HomeSagas,
    ...PostSagas,
];

function* globalSagas() {
    const globalSagasForks = sagas.map((saga) => fork(saga));

    yield all([...globalSagasForks]);
}

export default globalSagas;