import React from 'react';
import { Provider } from 'react-redux';


import configureStore from './store/store';

const store = configureStore();

// This root component can be used to wrap any component. In this project, we have separated this to wrap while testing the components.
export default function Root(props) {
  return (
    <Provider store={store}>
      {props.children}
    </Provider>)
}
