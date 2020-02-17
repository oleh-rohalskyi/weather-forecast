import React, { useState } from 'react';
import {useDispatch,useSelector} from 'react-redux';
import {selectors,actionTypes} from '../../features/weather';

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

  const error = useSelector(selectors.getWeatherError);

  const message = error ? "Please try another city" : "Please enter a city";
  const labelClass = "weather-form__label" + (error ? " danger" : "");
  
  return (
      <form className="weather-form">
        <label className={labelClass}  htmlFor={name}>{message}</label>
        <input className="weather-form__input" type="text" id={name} onChange={handleInputChange}/>
        <button className="weather-form__submit" onClick={handleClick}>Have a look</button>
      </form>
  );
};

export default WeatherFrom;
