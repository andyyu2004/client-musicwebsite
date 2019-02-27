import React, { useEffect } from 'react';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
import { Sidebar } from './components';
import { MusicPlayer } from './containers/';
import { connect } from 'react-redux';
import './App.scss';
import './css/global.scss';

import { 
  About, 
  Home, 
  NotFound, 
  TopicList, 
  Upload,
  Tracks,
  Albums,
  Library,
  TorrentTrack,
  Account,
  Register,
  SignIn,
  AlbumView,
  ArtistView,
  ArtistsView,
} from './views';
import { SYNC_STORE_WITH_SESSION } from './actions/constants';
import QueueList from './containers/QueueList';


const App = ({ user, syncStoreWithSession }) => {
  useEffect(() => { syncStoreWithSession() });
  if (!user)
    return <Unauthenticated />;
  return <Authenticated user={user}/>;
};

const mapStateToProps = state => ({
  user: state.user.user,
});

const mapDispatchToProps = dispatch => ({
  syncStoreWithSession: () => dispatch({ type: SYNC_STORE_WITH_SESSION }),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));


const Authenticated = ({ user }) => {
  const authLinks = ['Library', 'Torrent', 'Upload', user];
  return (
    <div className="AppContainer">
      <aside className="SidebarContainer">
        <Sidebar links={authLinks}/>
      </aside>
      <div className="mainContainer">
        <main className="viewContainer">
          <Switch>
            <Route exact path='/about' component={About} />
            <Route exact path='/topics' component={TopicList} />
            <Route exact path='/library' component={Library} />
            <Route exact path='/library/tracks' component={Tracks} />
            <Route exact path='/library/albums' component={Albums} />
            <Route exact path='/library/albums/:albumid' component={AlbumView} />
            <Route exact path='/library/artists' component={ArtistsView} />
            <Route exact path='/library/artists/:artistid' component={ArtistView} />
            <Route exact path='/torrent' component={TorrentTrack} />
            <Route exact path='/upload' component={Upload} />
            <Route exact path='/account/register' component={Register} />
            <Route exact path='/account/signin' component={SignIn} />
            <Route exact path={`/${user}`} component={Account} />
            <Route><Redirect to='/library' /></Route>
          </Switch>
        </main>
      </div>
      <div className="MusicPlayerContainer">
        <MusicPlayer />
      </div>
      <div className="QueueContainer">
        <QueueList />
      </div>
    </div>
  );
}


const Unauthenticated = () => {
  const unauthlinks = ['Home', 'Torrent', 'Signin', 'Register', 'About'];
  return (
    <div className="AppContainer">
      <aside className="SidebarContainer">
        <Sidebar links={unauthlinks}/>
      </aside>
      <div className="mainContainer">
        <main className="viewContainer">
          <Switch>
            <Route exact path='/'><Redirect to='/home' /></Route>
            <Route exact path='/home' component={Home} />
            <Route exact path='/about' component={About} />
            <Route exact path='/torrent' component={TorrentTrack} />
            <Route exact path='/account' component={Account} />
            <Route exact path='/register' component={Register} />
            <Route exact path='/signin' component={SignIn} />
            <Route component={NotFound} />
          </Switch>
        </main>
      </div>
      <div className="MusicPlayerContainer">
        <MusicPlayer />
      </div>
    </div>
  );
};

// const Unauthenticated = () => (
//   <div className="AppContainer">
//     <aside className="SidebarContainer">
//       <Sidebar links={unauthlinks}/>
//     </aside>
//     <div className="mainContainer">
//       <main className="viewContainer">
//         <Switch>
//           <Route exact path='/'><Redirect to='/home' /></Route>
//           <Route exact path='/home' component={Home} />
//           <Route exact path='/about' component={About} />
//           <Route exact path='/topics' component={TopicList} />
//           <Route exact path='/library' component={Library} />
//           <Route exact path='/library/tracks' component={Tracks} />
//           <Route exact path='/library/albums' component={Albums} />
//           <Route exact path='/torrent' component={TorrentTrack} />
//           <Route exact path='/upload' component={Upload} />
//           <Route exact path='/music' component={Music} />
//           <Route exact path='/music/tracks' component={Tracks} />
//           <Route exact path='/account' component={Account} />
//           <Route exact path='/account/register' component={Register} />
//           <Route exact path='/account/signin' component={SignIn} />
//           <Route component={NotFound} />
//         </Switch>
//       </main>
//     </div>
//     <div className="MusicPlayerContainer">
//       <MusicPlayer />
//     </div>
//   </div>
// );

