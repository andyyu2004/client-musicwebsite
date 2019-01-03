import React, { PureComponent } from 'react';
import { TrackList } from '../containers';
import { connect } from 'react-redux';
import { FETCH_TRACKS } from '../actions/constants';

class Tracks extends PureComponent {
  
  componentDidMount() {
    // SELECT trackid, title, artistname, albumname, genre, filename, encoding
    this.props.fetchTracks();
  }

  render() {
    const { tracks } = this.props;
    return (
      <div>
        <h4>Tracks</h4>
        <TrackList items={tracks} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { all } = state.music.tracks;
  return {
    tracks: all,
  };
}

const mapDispatchToProps = dispatch => ({
  fetchTracks: () => dispatch({ type: FETCH_TRACKS }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Tracks);
