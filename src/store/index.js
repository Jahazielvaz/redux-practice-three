import { createStore } from 'redux';
import reducer from '../reducers';

const initialState = {
  message: "This is my initial State"
}

const store = createStore(reducer, initialState)

export default store;
