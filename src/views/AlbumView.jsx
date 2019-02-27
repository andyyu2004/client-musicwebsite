import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { FETCH_TRACKS_BY_ALBUM_ID } from '../actions/constants';
import { TrackList } from '../containers';

const AlbumView = ({ match, albums, fetchTracksByAlbumId }) => {
  
  const { albumid } = match.params;

  useEffect(() => {
    fetchTracksByAlbumId(albumid);
  }, false);

  const tracks = albums[albumid];
  
  return (
    <>
      <h4>{tracks && tracks[0] && tracks[0].album}</h4>
      <TrackList items={tracks} />
    </>
  );
};

const mapStateToProps = state => {
  const { album } = state;
  return {
    albums: album,
  };
}

const mapDispatchToProps = dispatch => ({
  fetchTracksByAlbumId: albumid => dispatch({
    type: FETCH_TRACKS_BY_ALBUM_ID,
    payload: { albumid }
  }),
});

export default connect(mapStateToProps, mapDispatchToProps)(AlbumView);