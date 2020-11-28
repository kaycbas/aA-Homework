import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';

import Root from './components/root';

// const addLoggingToDispatch = store => next => action => {
//   console.log(store.getState());
//   console.log(action);
//   next(action);
//   console.log(store.getState());
// }

// function applyMiddlewares(store, ...middlewares) {
//   let dispatch = store.dispatch;
//   middlewares.forEach(mw => {
//     dispatch = mw(store)(dispatch);
//   })
//   return Object.assign({}, store, { dispatch })
// }

document.addEventListener('DOMContentLoaded', () => {
  const preloadedState = localStorage.state ?
    JSON.parse(localStorage.state) : {};
  const store = configureStore(preloadedState);
  const root = document.getElementById('content');
  ReactDOM.render(<Root store={store} />, root);
});
