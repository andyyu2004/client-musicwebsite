import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter as Router } from 'react-router-dom';
import { isMobile } from 'react-device-detect';

if (isMobile) {
  ReactDOM.render(
    <>
      <h3>Please Use Mobile App or Browser</h3>
      <p>Link To Mobile App Here</p>
    </>,
    document.getElementById('root')
  )
} else {
  ReactDOM.render(
    <Provider store={store}>
      <Router>
        <App />
      </Router> 
    </Provider>,
  document.getElementById('root'));
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
