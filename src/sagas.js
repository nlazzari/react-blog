import { fork, all } from 'redux-saga/effects';

import HomeSagas from './containers/Home/sagas';

const sagas = [
    ...HomeSagas,
];

function* globalSagas() {
    const globalSagasForks = sagas.map((saga) => fork(saga));

    yield all([...globalSagasForks]);
}

export default globalSagas;