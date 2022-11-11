import { put, call, takeEvery, select } from 'redux-saga/effects';
import { setImages, setError, setNaxaResponse } from '../actions';
import { fetchNaxaResponse } from '../api';
import { FETCH_DATA } from '../constants';

export function* handleGetReponse() {
    try {
        const response = yield call(fetchNaxaResponse);
        yield put(setNaxaResponse(response));
    } catch (error) {
        console.log("got some error")
    }
}

export default function* watchImagesLoad() {
    yield takeEvery(FETCH_DATA, handleGetReponse);
}
