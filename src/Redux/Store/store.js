import { createStore } from 'redux';
import reducer from '../Reducers';

const initStore = () => createStore(reducer);

export default initStore;
