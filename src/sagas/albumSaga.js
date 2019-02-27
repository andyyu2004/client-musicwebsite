import { FETCH_ALBUMS, FETCH_ALBUMS_ASYNC, FETCH_ALBUMS_BY_ARTIST_ID, FETCH_ALBUMS_BY_ARTIST_ID_ASYNC } from '../actions/constants';
import { put, call, takeLatest } from 'redux-saga/effects';
import { fetchAlbumsList, fetc, fetchAlbumsByArtistId } from '../api/get';

function* watchFetchAlbumsAsync() {
  const albums = yield call(fetchAlbumsList);
  yield put({ type: FETCH_ALBUMS_ASYNC, payload: { albums }});
}

export function* watchFetchAlbums() {
  yield takeLatest(FETCH_ALBUMS, watchFetchAlbumsAsync);
}

function* fetchAlbumsByArtistIdAsync(action) {
  const { artistid } = action.payload;
  const album = yield call(fetchAlbumsByArtistId, artistid);
  console.log(album)
  yield put({ type: FETCH_ALBUMS_BY_ARTIST_ID_ASYNC, payload: { album, artistid }});
}

export function* watchFetchAlbumsByArtistId() {
  yield takeLatest(FETCH_ALBUMS_BY_ARTIST_ID, fetchAlbumsByArtistIdAsync);
}