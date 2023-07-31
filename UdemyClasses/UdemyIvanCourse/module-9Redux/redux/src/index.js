import React from 'react';
import { legacy_createStore as createStore } from 'redux';
import ReactDOM from 'react-dom/client';

const initialState = 0;

const reducer = (state, action) => {
  switch (action.type) {
    case 'INCREAMENT':
      return state + 1;
    case 'DECREAMENT':
      return state - 1;
    default:
      return state;
  }
}

const store = createStore(reducer);
store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch({ type: 'INCREAMENT' });
store.dispatch({ type: 'INCREAMENT' });

// let state = reducer(initialState, { type: 'INCREAMENT'});
// state = reducer(state, { type: 'INCREAMENT'});
// state = reducer(state, { type: 'INCREAMENT'});
// state = reducer(state, { type: 'INCREAMENT'});

// console.log(state);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <>
      <h1>Hello World</h1>
    </>
  </React.StrictMode>
);
