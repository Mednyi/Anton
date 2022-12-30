// import logo from './logo.svg';
import './App.css';

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
    <div class="promotion__timer">
      <div class="title">Осталось до конца акции:</div>
      <div class="timer">
          <div class="timer__block">
            <span id="days">12</span>
            дней
          </div>
          <div class="timer__block">
            <span id="hours">20</span>
            часов
          </div>
          <div class="timer__block">
            <span id="minutes">56</span>
            минут
          </div>
          <div class="timer__block">
            <span id="seconds">20</span>
            секунд
          </div>
      </div>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <Header/>
      <Field/>
      <Button/>
      <Countdown/>
    </div>
  );
}

export default App;
