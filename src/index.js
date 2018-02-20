import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from '../src/Redux/Store/store';
import Container from './Components/Container/Container';

// require('./Components/Container/Container');

ReactDOM.render(
  <Provider store={store}>
    <Container />
  </Provider>,
  document.getElementById('root'),
);
