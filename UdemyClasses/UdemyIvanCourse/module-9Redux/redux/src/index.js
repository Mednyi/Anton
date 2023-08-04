import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './components/App';
import { legacy_createStore as createStore } from 'redux';
import reducer from './reducer';
// import * as actions from './actions';

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
// const { dispatch, subscribe, getState } = store;
const root = createRoot(document.getElementById('root'));

// const { inc, dec, rnd, res } = bindActionCreators(actions, dispatch);

root.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);

// const bindActionCreator = (creator, dispatch) => (...args) => {
//   dispatch(creator(...args));
// }



