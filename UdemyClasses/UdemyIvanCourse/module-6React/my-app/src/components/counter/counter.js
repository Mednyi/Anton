/* eslint-disable no-unused-expressions */
import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
  }

  get pro() {
    return console.log(this.props);
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

// let one = new Counter(4);
// one.pro;

export default Counter;