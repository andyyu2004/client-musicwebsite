import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { FETCH_ARTISTS } from '../actions/constants';
import { ArtistList } from '../containers';

/** View Displaying List Of All Artists */
const ArtistView = ({ artists, fetchArtists }) => {
  useEffect(() => {
   fetchArtists()
  }, false);

  return (
    <>
      <h4>ArtistView</h4>
      <ArtistList artists={artists} />
    </>
  );
};

const mapStateToProps = state => ({
  artists: state.artist.all,
});

const mapDispatchToProps = dispatch => ({
  fetchArtists: () => dispatch({
    type: FETCH_ARTISTS
  }),
});

export default connect(mapStateToProps, mapDispatchToProps)(ArtistView);