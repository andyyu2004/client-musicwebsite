import React from 'react';
import { Link } from 'react-router-dom';

const Account = () => (
  <>
    <h3>Account</h3>
    <Link className='link' to='/account/register'>Register</Link>
    <Link className='link' to='/account/signin'>Sign In</Link>
  </>
);

export default Account;