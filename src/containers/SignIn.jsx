import React, { useState } from 'react'
import { connect } from 'react-redux';
import { ATTEMPT_SIGN_IN } from '../actions/constants';

const SignIn = ({ signIn }) => {

  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');

  const onSubmit = e => {
    e.preventDefault();
    if (!email || !password) alert("Please enter an email AND password");
    signIn(email, password);
  };

  return (
    <>
      <form onSubmit={onSubmit}>
      <input type="text" placeholder="email" onChange={e => setEmail(e.target.value)}></input>
        <input type="text" placeholder="password" onChange={e => setPassword(e.target.value)}></input>
        <input type="submit"></input>
      </form>
    </>
  );
};

const mapStateToProps = state => ({
  // loginMessage: state
});

const mapDispatchToProps = dispatch => ({
  signIn: (email, password) => dispatch({
    type: ATTEMPT_SIGN_IN,
    // payload: {
    //   email, password
    // },
  }),
  
});

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);