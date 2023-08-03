import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './components/App';
import { legacy_createStore as createStore } from 'redux';
import reducer from './reducer';
// import * as actions from './actions';

const store = createStore(reducer);
// const { dispatch, subscribe, getState } = store;

// const { inc, dec, rnd, res } = bindActionCreators(actions, dispatch);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// const bindActionCreator = (creator, dispatch) => (...args) => {
//   dispatch(creator(...args));
// }



