import React, { useState } from 'react';
import { connect } from 'react-redux';
import { ATTEMPT_REGISTER } from '../actions/constants';
// import { registerUser } from '../api/post';

const Register = ({ registerUser, message }) => {

  const [ name, setName ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ email, setEmail ] = useState('');
  
  const onSubmit = e => {
    e.preventDefault();
    if (!email || !password) alert("Please enter an email AND password");
    registerUser(email, name, password);
  };
  
  return (
    <>
      <h3>Register</h3>
      <p>{message}</p>
      <form onSubmit={onSubmit}>
      <input type="text" placeholder="email" onChange={e => setEmail(e.target.value)}></input>
        <input type="text" placeholder="name" onChange={e => setName(e.target.value)}></input>
        <input type="password" placeholder="password" onChange={e => setPassword(e.target.value)}></input>
        <input type="submit"></input>
      </form>
    </>
  );
};

const mapStateToProps = state => ({
  message: state.message.registrationMessage,
});

const mapDispatchToProps = dispatch => ({
  registerUser: (email, name, password) => dispatch ({
    type: ATTEMPT_REGISTER,
    payload: {
      email,
      name,
      password,
    },
  }),
});



export default connect(mapStateToProps, mapDispatchToProps)(Register);