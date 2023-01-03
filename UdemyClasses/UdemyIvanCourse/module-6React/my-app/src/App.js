/* eslint-disable no-unused-vars */
/* eslint-disable no-useless-constructor */
// import logo from './logo.svg';
import './App.css';
import React from 'react';
// eslint-disable-next-line no-unused-vars
import { Component } from 'react';

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

const Countdown = () => {
  return (
    <div className="promotion__timer">
      <div className="title">Осталось до конца акции:</div>
      <div className="timer">
          <div className="timer__block">
            <span id="days">12</span>
            дней
          </div>
          <div className="timer__block">
            <span id="hours">20</span>
            часов
          </div>
          <div className="timer__block">
            <span id="minutes">56</span>
            минут
          </div>
          <div className="timer__block">
            <span id="seconds">20</span>
            секунд
          </div>
      </div>
    </div>
  )
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

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
  }

  increment = () => {
    if (this.state.counter < 50) {
      this.setState({
        counter: this.state.counter + 1
      })
    }
  }

  decrement = () => {
    if (this.state.counter > -50) {
      this.setState({
        counter: this.state.counter - 1
      })
    }
  }

  roundCounter = () => {
    this.setState({
      counter: +(Math.random() * (50 - -50) + -50).toFixed(0)
    })
  }

  resetCounter = () => {
    this.setState({
      counter: 0
    })
  }

  // Используйте только стрелочную форму методов
  // Почему? Подробный ответ будет в следующем уроке

  render() {

    const { counter } = this.state;
    return (
      <div className="wrapper">
        <div className="counter">{ counter }</div>
        <div className="controls">
          <button onClick={ this.increment }>INC</button>
          <button onClick={ this.decrement }>DEC</button>
          <button onClick={ this.roundCounter}>RND</button>
          <button onClick={ this.resetCounter}>RESET</button>
        </div>
      </div>
    )
  }
}

class Counter2 extends React.Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef()
    this.state = { curValue: 1 }
  }

  changeValue = ({curValue, newValue}) => {
    this.setState({ curValue: newValue !== 100 ? newValue : 99 })
  }

  handleValueChange = (newValue, isField) => {
    const {
      props: { id, onChange },
      state: {
        curValue
      }
    } = this

    newValue = parseInt(newValue, 10)

    if (!newValue) {
      if (isField) {
        newValue = ''
      } else {
        newValue = 1
      }
    }
    if (newValue < 0) {
      newValue = 1
    }
    if (!isField) {
      this.inputRef.current.style.transform = newValue > curValue ? 'translateY(-100%)' : 'translateY(100%)'
      this.inputRef.current.style.opacity = 0

    setTimeout(() => {
        this.inputRef.current.style.transitionDuration = '0s'
        this.inputRef.current.style.transform = newValue > curValue ? 'translateY(100%)' : 'translateY(-100%)'
        this.inputRef.current.style.opacity = 0
        this.changeValue({ curValue, newValue })

        setTimeout(() => {
          this.inputRef.current.style.transitionDuration = '0.3s'
          this.inputRef.current.style.transform = 'translateY(0)'
          this.inputRef.current.style.opacity = 1
        }, 20)
      }, 250)
    } else {
      this.changeValue({ curValue, newValue })
    }
  }

  render () {
    const {
      state: {
        curValue
      }
    } = this

    return (
      <div {...{ className: 'counter-2' }}>
        <button
          {...{
            className: 'button',
            onClick: () => { this.handleValueChange(curValue - 1) },
            title: '-1'
          }}
        >
          −
        </button>
        <div {...{ className: 'input-wrapper' }}>
          <input
          {...{
            className: 'input',
            maxLength: 2,
            onChange: e => {
              e.preventDefault()
              this.handleValueChange(e.target.value, true)
            },
            ref: this.inputRef,
            type: 'text',
            value: curValue
          }}
        />
        </div>
        <button
          {...{
            className: 'button',
            onClick: () => { this.handleValueChange(curValue + 1) },
            title: '+1'
          }}
        >
          +
        </button>
      </div>
    )
  }
}

function App() {
  return (
    <div className="App">
      <Header/>
      <Field/>
      <Button/>
      <Countdown/>
      <Counter/>
      <Counter2 />
    </div>
  );
}

export default App;
