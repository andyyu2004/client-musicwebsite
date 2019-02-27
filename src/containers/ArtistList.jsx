import React, { Fragment } from 'react'
import { Link } from 'react-router-dom';

/** A Reusable Component For Displaying A List Formatted For Artists */
const ArtistList = ({ artists }) => {
  console.log(artists)
  return (
    <div>{artists && artists.map((a, i) => 
      <Fragment key={i}>
        <Link className="buttonStyledLink" to={`/library/artists/${a.artistid}`}>
          {a.artist}
        </Link>        
        <br />
      </Fragment>)}
    </div>
  );
};

export default ArtistList;