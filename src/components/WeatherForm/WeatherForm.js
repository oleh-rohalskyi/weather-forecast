import React, { useState, useEffect } from 'react';
import {useDispatch} from 'react-redux';
import {actionTypes} from '../../features/weather';

import './weather-form.sass';

const WeatherFrom = ({name}) => {
  
  const [city, setCity] = useState("");
  
  const dispatch = useDispatch();

  const handleClick = (e) => {
      e.preventDefault();
      dispatch(actionTypes.weatherCharterer(actionTypes.CALL_FROM_WEATHER_FORM))
      dispatch(actionTypes.fetchWeather(city))
  }

  const handleInputChange = (e) => {
    setCity(e.target.value)
  }

  return (
      <form className="weather-form">
        <label className="weather-form__label"  htmlFor={name}>Please enter a city</label>
        <input className="weather-form__input" type="text" id={name} onChange={handleInputChange}/>
        <button className="weather-form__submit" onClick={handleClick}>Have a look</button>
      </form>
  );
};

export default WeatherFrom;
