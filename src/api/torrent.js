/*import WebTorrent from 'webtorrent';
import Fuzzy from 'fuzzyset.js';


function normaliseFileName(fname) {
  // Remove Filename extensions
  return fname.split('.').slice(0, -1).join('.')
}

async function getTorrent(magnetURI, filename) {
  const client = new WebTorrent();
  // const torrent = client.add(magnetURI);
  // console.log(torrent);
  // torrent.on("ready", torrent => {
  //   console.log(torrent);
  // });
  client.add(magnetURI, {}, (torrent) => {
    console.log(torrent);
  });
}

async function getTorrent(magnetURI, filename) {
  return new Promise((resolve, reject) => {
    const torrentClient = new WebTorrent();
    const torrent =torrentClient.add(magnetURI)
    // torrentClient.add(magnetURI, {},  torrent => {
    //   console.log('Client is downloading:', torrent.infoHash);
    //   if(!torrent.files.length) {
    //     return console.log(`No files found in torrent!`)
    //   }
    //   torrent.files.forEach(file => file.deselect());
    //   const names = Fuzzy(torrent.files.map(a => normaliseFileName(a.name)))

    //   console.log('got', names.get(filename, [[0, 'shit']], 0))
    //   const [[, maximalMatch], ] = names.get(filename, [[0, 'shit']], 0)
    //   const file = torrent.files.find(a => normaliseFileName(a.name) === maximalMatch);

    //   if(!file) {
    //     return console.log(`No match for track name!`)
    //   }

    //   console.log(file.name);
    //   const stream = file.createReadStream();
    //   stream.on('end', () => {
    //     console.log(file.name, 'is finished downloading!')
    //     torrentClient.destroy();
    //   })
    //   stream.on('error', () => {
    //     console.log('torrent has errored!')
    //     torrentClient.destroy();
    //   })
    //   console.log('Started streaming ', file.name);
    //   resolve(stream);
    });
  });
}
    
export { getTorrent };

*/