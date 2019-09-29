import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, compose } from 'redux';

import App from './App';

import listReducer from './reducers/listReducer';
import visFilterReudcer from './reducers/visFilterReducer';

const rootReducer = combineReducers({
  list: listReducer,
  vis: visFilterReudcer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
