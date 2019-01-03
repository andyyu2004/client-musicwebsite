import React from 'react';
// import { Link } from 'react-router-dom';
import { Navbar } from '../components/';

const Library = () => {
  const links = ["artists", "albums", "tracks", "genres"];
  return (
    <>
      <Navbar base="library" links={links}/>
    </>
  );  
}



export default Library;