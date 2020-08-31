import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import App from './App';

const store = createStore(rootReducer, applyMiddleware(thunk));
export { store };

const Root = props => {
  return (
    <Provider store={store}>
      <App {...props} canvasIndex={0} />
    </Provider>
  );
};

export default Root;
