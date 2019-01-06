import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Sidebar.scss';

// const Sidebar = () => (
//   <>
//     <ul className="SidebarList">
//       <li><Link className="link" to='/home'>Home</Link></li>
//       <li><Link className="link" to='/library'>Library</Link></li>
//       <li><Link className="link" to='/torrent-tracks'>Torrent Tracks</Link></li>
//       <li><Link className="link" to='/upload'>Upload</Link></li>
//       <li><Link className="link" to='/settings'>Settings</Link></li>
//       <li><Link className="link" to='/about'>About</Link></li>
//       <li><Link className="link" to='/account'>Account</Link></li>
//     </ul>
//   </>
// );

const Sidebar = ({ links }) => (
  <>
    <ul className="SidebarList">
      {links.map(link => (
        <li key={link}><Link className="link"to={`/${link.toLowerCase()}`}>{link}</Link></li>
      ))}
    </ul>
  </>
);

export default Sidebar;