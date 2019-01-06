import React from 'react';
import { SYNC_STORE_WITH_SESSION } from '../actions/constants';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

const Account = withRouter(({ history, match, syncStoreWithSession }) => {
  
  const logout = () => { 
    sessionStorage.removeItem('jwtToken');
    sessionStorage.removeItem('currUser');
    syncStoreWithSession();
    history.push('/home');
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

});

export default connect(null, mapDispatchToProps)(Account);