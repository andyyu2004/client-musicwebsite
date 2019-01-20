import { FETCH_ALBUMS, FETCH_ALBUMS_ASYNC } from '../actions/constants';
import { put, call, takeLatest } from 'redux-saga/effects';
import { fetchAlbumsList } from '../api/get';

function* watchFetchAlbumsAsync() {
  const albums = yield call(fetchAlbumsList);
  console.log(albums)
  yield put({ type: FETCH_ALBUMS_ASYNC, payload: { albums }});
}

export function* watchFetchAlbums() {
  yield takeLatest(FETCH_ALBUMS, watchFetchAlbumsAsync);
}