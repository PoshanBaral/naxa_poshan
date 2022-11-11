import { all } from 'redux-saga/effects';

import apiGetResponse from './apiGetResponse';

export default function* rootSaga() {
    yield all([apiGetResponse()]);
}
