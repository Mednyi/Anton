import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';

const element = <h2>Hello World!</h2>;

// const element = React.createElement('h2', {className: 'greetings'}, 'Hello World!');

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  element
);

