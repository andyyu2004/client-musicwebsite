import axios from 'axios';

// Is this even worth generalising into a seperate func?

export async function fetchTrackList() {
  try {
    const jwtToken = sessionStorage.getItem('jwtToken');
    const resp = await axios.get(`/api/protected/music/tracks?jwt_token=${jwtToken}`);
    return resp.data;
  } catch(err) {
    console.log(err);
    return [];
  }
}

export async function fetchAlbumsList() {
  try {
    const jwtToken = sessionStorage.getItem('jwtToken');
    const resp = await axios.get(`/api/protected/music/albums?jwt_token=${jwtToken}`);
    return resp.data;
  } catch(err) {
    console.log(err);
    return [];
  }
}

export async function fetchArtistList() {
  try {
    const jwtToken = sessionStorage.getItem('jwtToken');
    const resp = await axios.get(`/api/protected/music/artists?jwt_token=${jwtToken}`);
    return resp.data;
  } catch(err) {
    console.log(err);
    return [];
  }
}

export async function fetchTracksByAlbumId(albumid) {
  try {
    const jwtToken = sessionStorage.getItem('jwtToken');
    const resp = await axios.get(`/api/protected/music/albums/${albumid}?jwt_token=${jwtToken}`);
    return resp.data;
  } catch (err) {
    console.log(err);
    return [];
  }
}

export async function fetchAlbumsByArtistId(artistid) {
  try {
    const jwtToken = sessionStorage.getItem('jwtToken');
    const resp = await axios.get(`/api/protected/music/artists/${artistid}?jwt_token=${jwtToken}`);
    return resp.data;
  } catch (err) {
    console.log(err);
    return [];
  }
}


// export async function fetchStream(url) {
//   try {
//     const resp = await axios.head(url);
//     console.log("HEAD", resp)
//     return resp.headers; // Maybe return obj if can get more data
//   } catch (err) {
//     return console.log(err);
//   }
// }