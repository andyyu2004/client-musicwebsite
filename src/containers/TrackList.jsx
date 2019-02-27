import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux';
import { SET_CURR_TRACK, DELETE_TRACK, ADD_TO_QUEUE as ADD_TRACK_TO_QUEUE, SHUFFLE_ALL } from '../actions/constants';
import { ContextMenu } from '../containers';
import shuffleIcon from '../images/shuffle_icon.png';
import '../css/TrackList.scss';

class TrackList extends Component {

  state = {
    showMenu: false,
    menuX: 0,
    menuY: 0,
  }

  openContextMenu = (e, track) => {
    e.preventDefault()
    this.setState ({
      track,
      showMenu: true,
      menuX: e.clientX,
      menuY: e.clientY
    }); 
  }

  render() {
    const { items, setTrackUrl, deleteTrack, shuffleAll } = this.props;
    const { showMenu, menuX, menuY, track } = this.state;
    return (
      <div onClick={() => this.setState({ showMenu: false })}>
        <span className="shuffleAllContainer" onClick={()=>shuffleAll(items)}><img className="icon"src={shuffleIcon} alt=""/><button>Shuffle All</button></span>
        <div className="trackListContainer"> {items && items.map((t, i) => 
          <Fragment key={i}>
            <button className="deleteButton" onClick={()=>deleteTrack(t.encoding, t.trackid)}>X</button>
            <button 
              className="trackButton" 
              onClick={()=>setTrackUrl(t)}
              onContextMenu={e => this.openContextMenu(e, t)}
            >
              {t.title} <em>({t.album} - {t.artist}) {t.encoding}</em>
            </button><br/>
          </Fragment>)}
        </div>
        {showMenu && <ContextMenu x={menuX} y={menuY} t={track}/>}
      </div>
    );
  }


}


const mapDispatchToProps = dispatch => ({
  setTrackUrl: track => dispatch({
    type: SET_CURR_TRACK,
    payload: {
      track
    },
  }),
  deleteTrack: t => dispatch({
    type: DELETE_TRACK,
    payload: {
      url: `/api/protected/music/tracks/${t.encoding}/${t.trackid}?jwt_token=${sessionStorage.getItem('jwtToken')}`
    },
  }),
  shuffleAll: tracks => dispatch({
    type: SHUFFLE_ALL,
    payload: { tracks },
  }),
});

export default connect(null, mapDispatchToProps)(TrackList);