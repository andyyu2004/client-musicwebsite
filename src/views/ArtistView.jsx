import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { FETCH_ALBUMS_BY_ARTIST_ID } from '../actions/constants';
import { AlbumList } from '../containers';

/** View For A Single Artist Showing Their Albums */ 
const ArtistView = ({ match, fetchAlbums, artists }) => {

  const { artistid } = match.params;

  useEffect(() => {
    fetchAlbums(artistid);
  }, false);

  const albums = artists[artistid];
  
  return (
    <>
      <h4>{albums && albums[0] && albums[0].artist}</h4>
      <AlbumList albums={albums} />
    </>
  );
};

const mapStateToProps = state => ({
  artists: state.artist,
});

const mapDispatchToProps = dispatch => ({
  fetchAlbums: artistid => dispatch({
    type: FETCH_ALBUMS_BY_ARTIST_ID,
    payload: { artistid }
  }),
});

export default connect(mapStateToProps, mapDispatchToProps)(ArtistView);