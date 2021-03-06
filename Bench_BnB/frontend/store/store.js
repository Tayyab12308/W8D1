import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/root_reducer';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

// const configureStore = (preLoadedState = {}) => createStore(rootReducer, preLoadedState, applyMiddleware(thunk, logger))

// export default configureStore;

export default (preloadedState = {}) => {
  return createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(thunk, logger)
  );
};