import { put, call, takeLatest } from 'redux-saga/effects';
import { FETCH_ARTISTS, FETCH_ARTISTS_ASYNC } from '../actions/constants';
import { fetchArtistList } from '../api/get';

function* watchFetchArtistsAsync() {
  const artists = yield call(fetchArtistList);
  yield put({ type: FETCH_ARTISTS_ASYNC, payload: { artists }});
}

export function* watchFetchArtists() {
  yield takeLatest(FETCH_ARTISTS, watchFetchArtistsAsync);
}