import axios from 'axios';

export async function fetchTrackList() {
  try {
    const resp = await axios.get('/api/music/tracks');
    return resp.data;
  } catch(err) {
    return console.log(err);
  }
}

export async function fetchAlbumsList() {
  try {
    const resp = await axios.get('/api/music/albums');
    return resp.data;
  } catch(err) {
    return console.log(err);
  }
}

export async function fetchStream(url) {
  try {
    const resp = await axios.head(url);
    console.log("HEAD", resp)
    return resp.headers; // Maybe return obj if can get more data
  } catch (err) {
    return console.log(err);
  }
}