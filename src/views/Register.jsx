import React, { useState } from 'react';
import { registerUser } from '../api/post';

const Register = props => {

  const [ name, setName ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ email, setEmail ] = useState('');
  
  const onSubmit = e => {
    e.preventDefault();
    if (!email || !password) alert("Please enter an email AND password");
    console.log(email, name, password);
    registerUser({ email, name, password });
  };
  
  return (
    <>
      <h3>Register</h3>
      <form onSubmit={onSubmit}>
      <input type="text" placeholder="email" onChange={e => setEmail(e.target.value)}></input>
        <input type="text" placeholder="name" onChange={e => setName(e.target.value)}></input>
        <input type="password" placeholder="password" onChange={e => setPassword(e.target.value)}></input>
        <input type="submit"></input>
      </form>
    </>
  );
};



export default Register;