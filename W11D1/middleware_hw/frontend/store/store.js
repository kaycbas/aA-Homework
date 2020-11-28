import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/root_reducer';

const addLoggingToDispatch = store => next => action => {
  console.log(store.getState());
  console.log(action);
  console.log(next);
  next(action);
  console.log(store.getState());
}

const addStaticPrintToDispatch = store => next => action => {
  console.log('This is middleware 2, printing before');
  console.log(next);
  next(action);
  console.log('This is middleware 2, printing after');
}

const configureStore = (preloadedState = {}) => {
  const store = createStore(rootReducer, preloadedState, applyMiddleware(addLoggingToDispatch, addStaticPrintToDispatch));
  store.subscribe(() => {
    localStorage.state = JSON.stringify(store.getState());
  });
  return store;
}

export default configureStore;
