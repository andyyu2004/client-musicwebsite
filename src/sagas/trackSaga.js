import { FETCH_TRACKS, FETCH_TRACKS_ASYNC, DOWNLOAD_TORRENT, SET_CURR_TRACK_TORRENT, SET_CURR_TRACK_TORRENT_ASYNC, DELETE_TRACK, FETCH_TRACKS_BY_ALBUM_ID_ASYNC, FETCH_TRACKS_BY_ALBUM_ID } from '../actions/constants';
import { put, call, takeLatest } from 'redux-saga/effects';
import { fetchTrackList, fetchTracksByAlbumId  } from '../api/get';
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
  const { url } = action.payload;
  yield call(deleteTracks, url);
  yield put({ type: FETCH_TRACKS });
}

function* fetchTracksByAlbumIdAsync(action) {
  const { albumid } = action.payload;
  const tracks = yield call(fetchTracksByAlbumId, albumid)
  console.log(tracks)
  yield put({ type: FETCH_TRACKS_BY_ALBUM_ID_ASYNC, payload: { tracks, albumid }});
}

export function* watchFetchTracksByAlbumId() {
  yield takeLatest(FETCH_TRACKS_BY_ALBUM_ID, fetchTracksByAlbumIdAsync)
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
