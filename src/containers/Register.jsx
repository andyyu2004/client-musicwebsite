import React, { useState } from 'react'
import { connect } from 'react-redux';
import { registerUser } from '../api/post';

const Register = props => {

  const [ email, setEmail ] = useState('');
  const [ name, setName ] = useState('');
  const [ password, setPassword ] = useState('');

  const onSubmit = e => {
    e.preventDefault();
    if (!email || !password) alert("Please enter an email AND password");
    console.log(email, name, password);
    registerUser({ email, name, password });
  };

  return (
    <>
      <form onSubmit={onSubmit}>
      <input type="text" placeholder="email" onChange={e => setEmail(e.target.value)}></input>
        <input type="text" placeholder="name" onChange={e => setName(e.target.value)}></input>
        <input type="text" placeholder="password" onChange={e => setPassword(e.target.value)}></input>
        <input type="submit"></input>
      </form>
    </>
  );
};

export default connect(null, null)(Register);