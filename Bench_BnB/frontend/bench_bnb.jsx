import React from 'react';
import ReactDOM from 'react-dom';
import { signup, login, logout } from './actions/session_actions';
import configureStore from './store/store';
import Root from './components/root';
import { fetchBenches } from './util/bench_api_util'

document.addEventListener("DOMContentLoaded", () => {
  let store;
  if (window.currentUser) {
    const preLoadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      },
      session: { id: window.currentUser.id }
    };
    store = configureStore(preLoadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  // TEST //
  window.store = store;
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.login = login;
  window.signup = signup;
  window.logout = logout;
  window.fetchBenches = fetchBenches;
  // TEST //
 
  const root = document.getElementById("root");
  ReactDOM.render(<Root store={store}/>, root)
});