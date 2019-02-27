import React, { useState } from 'react'
import axios from 'axios';
import { connect } from 'react-redux';
import { ATTEMPT_SIGN_IN, SYNC_STORE_WITH_SESSION } from '../actions/constants';
import { signIn } from '../api/post';

const SignIn = ({ token, syncStoreWithSession, message }) => {
  
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');

  const onClick = async e => {
    // const headers = { Authorization: `Bearer ${token}` };
    // axios.get('/api/protected', { headers });
    // console.log(await test());
  }

  const test = () => {
    return axios.get('/api/music/artists')
    .then(resp => resp.data);
  }

  const onSubmit = async e => {
    e.preventDefault();
    if (!email || !password) alert("Please enter an email AND password");
    await signIn({ email, password });
    syncStoreWithSession();
  }
  
  return (
    <>
      <h3>SignIn</h3>
      <p>{message}</p>
      <form onSubmit={onSubmit}>
      <input type="text" placeholder="email" onChange={e => setEmail(e.target.value)}></input>
        <input type="password" placeholder="password" onChange={e => setPassword(e.target.value)}></input>
        <input type="submit"></input>
      </form>
    </>
  );
}

const mapStateToProps = state => ({
  message: state.message.loginMessage,
});

const mapDispatchToProps = dispatch => ({
  signIn: (email, password) => dispatch({
    type: ATTEMPT_SIGN_IN,
    payload: {
      email, password
    },
  }),
  syncStoreWithSession: () => dispatch({ type: SYNC_STORE_WITH_SESSION }),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);