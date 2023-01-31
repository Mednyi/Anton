/* eslint-disable no-unused-vars */
/* eslint-disable no-useless-constructor */
// import logo from './logo.svg';
import './App.css';
import React from 'react';
import Counter from './components/counter/counter';
import Counter2 from './components/counter-2/counter2';
import Countdown from './components/countdown/countdown';
import Form from './components/form/form'
// import Clock from './components/clock/clock';
import BootstrapTest from './BootstrapTest';

const Header = () => {
  return <h2>Hello World!</h2>
}

const Field = () => {
  const styledField = {
    width: '300px'
  };

  return <input type="text" placeholder="Type here" style={styledField}/>
}

const Button = () => {
  const text = 'Log in';
  const logged = true;

  return <button>{logged ? 'Enter' : text}</button>
}

// function Counter(props) {

//   return (
//     <div class="wrapper">
//       <div class="counter">10</div>
//       <div class="controls">
//         <button>INC</button>
//         <button>DEC</button>
//         <button>RND</button>
//         <button>RESET</button>
//       </div>
//     </div>
//   )
// }

function App() {
  return (
    <div className="App">
      <Header/>
      <Field/>
      <Button/>
      <Countdown/>
      <Counter/>
      <Counter2 />
      {/* <Clock template={{ template: 'h:m:s'}}/> */}

      <BootstrapTest />

      <Form/>
    </div>
  );
}

export default App;
