import { all, put, fork } from 'redux-saga/effects';
import { DataSaga } from './dataSaga';
import { MapSaga } from '../Map/saga';

import {
  DATA_FETCH_REQUEST,
  MAP_STYLE_FETCH_REQUEST
} from './reducer';

const sagas = [DataSaga, MapSaga];

function* Saga() {
  yield all(sagas.map(saga => fork(saga)));
  yield put({ type: DATA_FETCH_REQUEST });
  yield put({ type: MAP_STYLE_FETCH_REQUEST });
}

export default Saga;
