import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { Sidebar } from './components';
import { MusicPlayer } from './containers/';
import './App.scss';
import './css/global.scss';

import { 
  About, 
  Home, 
  NotFound, 
  TopicList, 
  Music,
  Upload,
  Tracks,
  Albums,
  Library,
  TorrentTrack,
  Account,
  Register,
  SignIn,
} from './views';

const App = () => (
  <div className="AppContainer">
    <aside className="SidebarContainer">
      <Sidebar />
    </aside>
    <div className="mainContainer">
      <main className="viewContainer">
        <Switch>
          <Route exact path='/'><Redirect to='/home' /></Route>
          <Route exact path='/home' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/topics' component={TopicList} />
          <Route exact path='/library' component={Library} />
          <Route exact path='/library/tracks' component={Tracks} />
          <Route exact path='/library/albums' component={Albums} />
          <Route exact path='/torrent-tracks' component={TorrentTrack} />
          <Route exact path='/upload' component={Upload} />
          <Route exact path='/music' component={Music} />
          <Route exact path='/music/tracks' component={Tracks} />
          <Route exact path='/account' component={Account} />
          <Route exact path='/account/register' component={Register} />
          <Route exact path='/account/signin' component={SignIn} />
          <Route component={NotFound} />
        </Switch>
      </main>
    </div>
    <div className="MusicPlayerContainer">
      <MusicPlayer />
    </div>
  </div>
);

export default App;
