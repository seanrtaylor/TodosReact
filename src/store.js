import { createStore, applyMiddleware, compose } from 'redux';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore, routerMiddleware } from 'react-router-redux';
import freeze from 'redux-freeze';
import { reducers } from './reducers/index';

const middlewares = [];

middlewares.push(routerMiddleware(browserHistory));

if (process.env.NODE_ENV !== 'production') {
  middlewares.push(freeze);
}

let middleware = applyMiddleware(...middlewares);

// add the redux dev tools
if (process.env.NODE_ENV !== 'production' && window.devToolsExtension) {
  middleware = compose(middleware, window.devToolsExtension());
}

// create the store
const store = createStore(reducers, middleware);
const history = syncHistoryWithStore(browserHistory, store);

export { store, history };
