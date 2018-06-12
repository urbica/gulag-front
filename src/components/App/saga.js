import { all, put, fork } from 'redux-saga/effects';
import ApiSaga from './apiSaga';

import { FETCH_REQUEST } from './reducers/dataActions';

const sagas = [ApiSaga];

function* Saga() {
  yield all(sagas.map(saga => fork(saga)));
  yield put({ type: FETCH_REQUEST });
}

export default Saga;
