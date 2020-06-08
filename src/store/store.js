import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers';
import reduxPromise from 'redux-promise';

const configureStore = (initialState = {}) => {
  const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(reduxPromise)
    //   compose(
    //     ,
    //     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
  )
  return store;
}


export default configureStore;
