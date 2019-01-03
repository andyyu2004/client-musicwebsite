import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../css/Music.css';

const Music = () => (
  <div>
    <h3>Music</h3>
    <Link to={'/music/upload'}>Uploads</Link>
    <Link to={'/music/tracks'}>Tracks</Link>
    <button onClick={handleUpload}>Upload</button>
    <button onClick={handleGetMusic}>Get Music</button>
    <button onClick={refresh}>Refresh</button>
  </div>
);


function handleUpload() {
  console.log("Handled Upload");
  // fetch('/api/')
}

function refresh() {
  console.log("Handle Refresh");
  axios.get("/refreshLibrary")
  .then(data => console.log(data.data.payload))
  .catch(err => console.log(err))
}

function handleGetMusic() {
  axios.get('/test')
  .then(resp => {
    console.log(resp.data.payload);
    return resp;
  });
}

export default Music;