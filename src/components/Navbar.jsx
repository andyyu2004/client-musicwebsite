import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Navbar.scss';

const Navbar = ({ base, links }) => (
  <>
    <ul className="NavbarList">
      {links.map(link => 
        <li key={link}><Link className="link" to={`/${base}/${link}`}>{link}</Link></li>
      )}
    </ul>
  </>
);

export default Navbar;