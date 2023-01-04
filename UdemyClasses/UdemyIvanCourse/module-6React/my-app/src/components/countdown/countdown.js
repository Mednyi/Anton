import { Component } from "react";

class Countdown extends Component {
  constructor(days, hours, mins, sec) {
    super(days, hours, mins, sec)
    this.days = days;
    this.hours = hours;
    this.mins = mins;
    this.sec = sec;
  }

  render() {
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
}

let one = new Countdown();
console.log(one);

export default Countdown;