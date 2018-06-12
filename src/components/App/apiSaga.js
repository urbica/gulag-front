import { call, put, takeLatest } from 'redux-saga/effects';

import fetchData from '../../api/fetchData';

// actions
import * as dataActions from './reducers/dataActions';

function* fetchHandler() {
  try {
    const data = yield call(fetchData);
    yield put({ type: dataActions.FETCH_SUCCESS, payload: data });
  } catch (error) {
    yield put({ type: dataActions.FETCH_FAILURE, payload: error });
  }
}

export default function* ApiSaga() {
  yield takeLatest(dataActions.FETCH_REQUEST, fetchHandler);
}
