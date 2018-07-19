import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import appReducer from './reducers/App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import './App.css';
// import registerServiceWorker from './registerServiceWorker';

const store = createStore(appReducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// registerServiceWorker();
