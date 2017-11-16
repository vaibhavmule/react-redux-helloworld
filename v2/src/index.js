import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import helloReducer from './reducers'
import registerServiceWorker from './registerServiceWorker';

let store = createStore(helloReducer) // this is store

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
	document.getElementById('root')
);
registerServiceWorker();
