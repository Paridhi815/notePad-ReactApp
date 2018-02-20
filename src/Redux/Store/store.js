import { createStore } from 'redux';
import reducer from '../Reducers';

/* eslint-disable no-underscore-dangle */
const initStore = createStore(
  reducer, /* preloadedState, */
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
/* eslint-enable */

export default initStore;
