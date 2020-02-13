import React, { useState } from 'react';
import {useDispatch} from 'react-redux';
import {actionTypes} from '../../features/weather';
import uuidv4 from 'uuid/v4';

import './weather-form.sass';

const WeatherFrom = ({props}) => {
  
  const [city, setCity] = useState("");

  const dispatch = useDispatch();

  const handleClick = (e) => {
      e.preventDefault();
      dispatch(actionTypes.fetchWeather(city))
  }

  const handleInputChange = (e) => {
    setCity(e.target.value)
  }

  const id = uuidv4();

  return (
    <div>
      <form className="weather-form">
        <label className="weather-form__label"  htmlFor={id}>Please enter a city</label>
        <input className="weather-form__input" type="text" id={id} onChange={handleInputChange}/>
        <button className="weather-form__submit" onClick={handleClick}>Have a look</button>
      </form>
    </div>
  );
};

export default WeatherFrom;
