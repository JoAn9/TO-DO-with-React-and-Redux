import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers';
import initialState from '../reducers/initialState';
import thunk from 'redux-thunk';


export default function configureStore() {
  return createStore(
    rootReducer,
    // initialState,
    applyMiddleware(thunk),
  );
}
