import { FETCH_TRACKS, FETCH_TRACKS_ASYNC, DOWNLOAD_TORRENT, SET_CURR_TRACK_TORRENT, SET_CURR_TRACK_TORRENT_ASYNC, DELETE_TRACK } from '../actions/constants';
import { put, call, takeLatest } from 'redux-saga/effects';
import { fetchTrackList  } from '../api/get';
import { getTorrent } from '../api/torrent';
import { deleteTracks } from '../api/delete';

function* fetchTracksAsync() {
  // const resp = yield call(axios.get, '/api/music/tracks');
  // const tracks = yield resp.data;
  const tracks = yield call(fetchTrackList);
  yield put({ type: FETCH_TRACKS_ASYNC, payload: { tracks }});
}

export function* watchFetchTracks() {
  yield takeLatest(FETCH_TRACKS, fetchTracksAsync);
}

// function* fetchTrackUrlAsync(action) {
//   yield console.log("ACTION", action.payload.filename);
// }

// export function* watchFetchTrackUrl() {
//   yield console.log("SDFJHSDFKWEYREWR");
//   yield takeLatest(FETCH_TRACK_URL, fetchTrackUrlAsync);
// }

export function* watchDeleteTracks() {
  yield takeLatest(DELETE_TRACK, deleteTracksAsync)
}

function* deleteTracksAsync(action) {
  const { url } = action.payload
  console.log("Deleting Track")
  yield call(deleteTracks, url)
  yield put({ type: FETCH_TRACKS })
}

function* setCurrTrackTorrentAsync(action) {
  const { url, filename } = action.payload;
  yield put({ type: SET_CURR_TRACK_TORRENT_ASYNC, payload: { url, filename }});
}

export function* watchSetCurrTrackTorrent() {
  yield takeLatest(SET_CURR_TRACK_TORRENT, setCurrTrackTorrentAsync);
}

function* downloadTorrentAsync(action) {
  const { magnetURI, trackName } = action.payload;
  yield call(getTorrent, magnetURI, trackName);
  // yield put({ type..., payload { stream }});
}

export function* watchDownloadTorrent() {
  yield takeLatest(DOWNLOAD_TORRENT, downloadTorrentAsync);
}
