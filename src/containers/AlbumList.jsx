import React, { Fragment } from 'react'
import { Route, Link } from 'react-router-dom';

const AlbumList = ({ albums }) => {
  console.log(albums)
  return (
    <div>{albums && albums.map((a, i) => 
      <Fragment key={i}>
        <Link className="buttonStyledLink" to={`/library/albums/${a.albumid}`}>
          {a.album} {a.year && <span><em>({a.year})</em></span>}
        </Link>        
        <br />
      </Fragment>)}

    </div>
  );
};

export default AlbumList;