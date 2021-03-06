import React from 'react';
import ReactDOM from 'react-dom';

// Redux Stuff
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import rootReducer from './reducers/index';

import App from './App';
import './index.css';

const store = createStore(rootReducer)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
