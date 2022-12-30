import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// const element = <h2>Hello World!</h2>;

// const element = React.createElement('h2', {className: 'greetings'}, 'Hello World!');

// const text = 'Another World greetings!';

// const element = (
//   <div>
//     <h2 className='text-element'> {text} </h2>
//     <input type="text" />
//     <button tabIndex={0}>Click</button>
//   </div>
// );

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  <StrictMode>
    <App />
  </StrictMode>
);

