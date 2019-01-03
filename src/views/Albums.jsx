import React, { PureComponent } from 'react';
import { TrackList } from '../containers';
import { connect } from 'react-redux';
import { FETCH_ALBUMS } from '../actions/constants';

class Albums extends PureComponent {
  
  componentDidMount() {
    this.props.fetchAlbums();
  }

  render() {
    const { albums } = this.props;
    return (
      <div>
        <h4>Albums</h4>
        <TrackList items={albums} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { all } = state.albums;
  return {
    albums: all,
  };
}

const mapDispatchToProps = dispatch => ({
  fetchAlbums: () => dispatch({ type: FETCH_ALBUMS }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Albums);
