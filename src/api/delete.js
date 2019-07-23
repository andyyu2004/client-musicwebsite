import axios from 'axios';

export async function deleteTracks(url) {
  console.log(url);
  const resp = await axios.delete(url);
  
}