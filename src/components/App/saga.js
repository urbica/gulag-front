import { call, put, takeLatest, fork } from 'redux-saga/effects';

import { getData, getStyles } from '../../utils/utils';

import {
  DATA_FETCH_REQUEST,
  DATA_FETCH_SUCCESS,
  DATA_FETCH_FAILURE,
  MAP_STYLE_FETCH_REQUEST,
  MAP_STYLE_FETCH_SUCCESS,
  MAP_STYLE_FETCH_FAILURE
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

function* fetchStyles() {
  try {
    const data = yield call(getStyles);
    yield put({
      type: MAP_STYLE_FETCH_SUCCESS,
      payload: data
    });
  } catch (error) {
    yield put({ type: MAP_STYLE_FETCH_FAILURE, payload: error });
  }
}

function* DataSaga() {
  yield takeLatest(DATA_FETCH_REQUEST, fetchData);
  yield takeLatest(MAP_STYLE_FETCH_REQUEST, fetchStyles);
}

function* Saga() {
  yield fork(DataSaga);
  yield put({ type: DATA_FETCH_REQUEST });
  yield put({ type: MAP_STYLE_FETCH_REQUEST });
}

export default Saga;
