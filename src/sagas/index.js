import { fork } from 'redux-saga/effects';
import { all } from 'redux-saga/effects';
import { watchFetchTracks, watchDownloadTorrent, watchSetCurrTrackTorrent, watchDeleteTracks } from './trackSaga';
import { watchFetchAlbums } from './albumSaga';

export default function* rootSaga() {
  yield all([
    fork(watchFetchTracks),
    fork(watchDownloadTorrent),
    fork(watchSetCurrTrackTorrent),
    fork(watchFetchAlbums),
    fork(watchDeleteTracks)
  ]);
}