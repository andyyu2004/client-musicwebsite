import React from 'react';
import { SYNC_STORE_WITH_SESSION, LOGOUT_RESET_AUTH } from '../actions/constants';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

const Account = withRouter(({ resetAllAuth, history, match, syncStoreWithSession }) => {
  
  const logout = () => { 
    sessionStorage.removeItem('jwtToken');
    sessionStorage.removeItem('currUser');
    syncStoreWithSession();
    history.push('/home');
    resetAllAuth();
  };

  return (
    <>
      <p>{match.url}</p>
      <button onClick={logout}>Logout</button>
    </>
  );
});

const mapDispatchToProps = dispatch => ({
  syncStoreWithSession: () => dispatch({ type: SYNC_STORE_WITH_SESSION }),
  resetAllAuth: () => dispatch({ type: LOGOUT_RESET_AUTH }),
});

export default connect(null, mapDispatchToProps)(Account);