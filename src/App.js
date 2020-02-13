import React from 'react';

import WeatherList from 'components/WeatherList';
import WeatherForm from 'components/WeatherForm';

import bg from 'media/taxi-design.svg';

const App = () => (
  <div className="App">
    <img className="App__bg" src={bg} alt="background" />
    <div className="weather">
      <h1 className="weather__h1">Hello Sunshine!</h1>
      <h2 className="weather__title">Can you please tell me the weather in Germany?</h2>
      <WeatherForm />
      <WeatherList />
    </div>
  </div>
);

export default App;
