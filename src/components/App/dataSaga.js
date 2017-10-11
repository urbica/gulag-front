import { call, put, takeLatest } from 'redux-saga/effects';

import { getData } from '../../utils/utils';

import {
  DATA_FETCH_REQUEST,
  DATA_FETCH_SUCCESS,
  DATA_FETCH_FAILURE
} from './reducer';

function* fetchData() {
  try {
    const data = yield call(getData);
    yield put({
      type: DATA_FETCH_SUCCESS,
      payload: data
    });
  } catch (error) {
    yield put({ type: DATA_FETCH_FAILURE, payload: error });
  }
}

// eslint-disable-next-line import/prefer-default-export
export function* DataSaga() {
// eslint-disable-next-line import/prefer-default-export
  yield takeLatest(DATA_FETCH_REQUEST, fetchData);
}
