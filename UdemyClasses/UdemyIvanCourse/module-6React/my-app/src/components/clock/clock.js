class Clock {
  constructor({ template }) {
    this.template = template;
  }

  render() {
    let date = new Date();

    let hours = date.getHours();
    if (hours < 10) hours = '0' + hours;

    let mins = date.getMinutes();
    if (mins < 10) mins = '0' + mins;

    let secs = date.getSeconds();
    if (secs < 10) secs = '0' + secs;

    // let output = this.template
    //   .replace('h', hours)
    //   .replace('m', mins)
    //   .replace('s', secs);

    return (
      <div className="promotion__timer">
        <div className="timer">
            <div className="timer__block">
              <span id="hours">{ hours }</span>
              часов
            </div>
            <div className="timer__block">
              <span id="minutes">{ mins }</span>
              минут
            </div>
            <div className="timer__block">
              <span id="seconds">{ secs }</span>
              секунд
            </div>
        </div>
      </div>
    )
  }

  stop() {
    clearInterval(this.timer);
  }

  start() {
    this.render();
    this.timer = setInterval(() => this.render(), 1000);
  }
}

// let clock = new Clock({template: 'h:m:s'});
// clock.start();

export default Clock;