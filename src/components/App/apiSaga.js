import { call, put, takeLatest } from 'redux-saga/effects';

import fetchData from '../../api/fetchData';

import {
  FETCH_REQUEST,
  FETCH_SUCCESS,
  FETCH_FAILURE
} from './reducers/dataReducer';

function* fetchHandler() {
  try {
    const data = yield call(fetchData);
    yield put({ type: FETCH_SUCCESS, payload: data });
  } catch (error) {
    yield put({ type: FETCH_FAILURE, payload: error });
  }
}

export default function* ApiSaga() {
  yield takeLatest(FETCH_REQUEST, fetchHandler);
}
