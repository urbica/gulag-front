import { call, put, takeLatest } from 'redux-saga/effects';

// import { changeViewport } from '../../reducers/ui';

import { getStyle } from '../../utils/utils';

import {
  MAP_STYLE_FETCH_REQUEST,
  MAP_STYLE_FETCH_SUCCESS,
  MAP_STYLE_FETCH_FAILURE
} from './reducer';

function* fetchStyle() {
  try {
    const data = yield call(getStyle);
    yield put({
      type: MAP_STYLE_FETCH_SUCCESS,
      payload: data
    });
  } catch (error) {
    yield put({ type: MAP_STYLE_FETCH_FAILURE, payload: error });
  }
}

// function* openPrison() {
//   yield call(changeViewport);
// }

// eslint-disable-next-line import/prefer-default-export
export function* MapSaga() {
  yield takeLatest(MAP_STYLE_FETCH_REQUEST, fetchStyle);
}
