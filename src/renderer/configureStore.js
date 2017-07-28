import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import reader from './app/reducers/reader';
import options from './app/reducers/options';
import windowState from './app/reducers/windowState';
import tab from './app/reducers/tab';

function configureStore() {
  const appReducers = combineReducers({
    reader,
    options,
    tab,
    windowState,
  });

  let enhacer;
  if (process.env.NODE_ENV === 'development') {
    enhacer = compose(
      applyMiddleware(thunk),
      window.devToolsExtension ? window.devToolsExtension() : f => f,
    );
  } else {
    enhacer = applyMiddleware(thunk);
  }

  return createStore(appReducers, enhacer);
}

export default configureStore;
