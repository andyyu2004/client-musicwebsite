import { fork } from 'redux-saga/effects';
import { all } from 'redux-saga/effects';
import { watchFetchTracks, watchDownloadTorrent, watchSetCurrTrackTorrent } from './trackSaga';
import { watchFetchAlbums } from './albumSaga';
import { watchAttemptSignIn } from './userSaga';

export default function* rootSaga() {
  yield all([
    fork(watchFetchTracks),
    fork(watchAttemptSignIn),
    fork(watchDownloadTorrent),
    fork(watchSetCurrTrackTorrent),
    fork(watchFetchAlbums),
  ]);
}