import { fork } from 'redux-saga/effects';
import { all } from 'redux-saga/effects';
import { watchFetchTracks, watchDownloadTorrent, watchSetCurrTrackTorrent, watchDeleteTracks, watchFetchTracksByAlbumId } from './trackSaga';
import { watchFetchAlbums, watchFetchAlbumsByArtistId } from './albumSaga';
import { watchFetchArtists } from './artistSaga';
import { watchRegisterUser } from './userSaga';

export default function* rootSaga() {
  yield all([
    fork(watchFetchTracks),
    fork(watchDownloadTorrent),
    fork(watchSetCurrTrackTorrent),
    fork(watchFetchAlbums),
    fork(watchDeleteTracks),
    fork(watchRegisterUser),
    fork(watchFetchTracksByAlbumId),
    fork(watchFetchArtists),
    fork(watchFetchAlbumsByArtistId)
  ]);
}