import React from 'react';

import WeatherList from 'components/WeatherList';
import WeatherForm from 'components/WeatherForm';

const App = () => (
  <div className="App">
    <div className="weather">
      <h1 className="weather__h1">Hello Sunshine!</h1>
      <h2 className="weather__title">Can you please tell me the weather in Germany?</h2>
      <WeatherForm name="main-form" />
      <WeatherList />
    </div>
  </div>
);

export default App;
