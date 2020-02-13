import React, { useState } from 'react';
import {useDispatch} from 'react-redux';
import {actionTypes} from '../../features/weather';

import './weather-form.sass';

const WeatherItem = ({props}) => {
  
  const [city, setCity] = useState("");

  const dispatch = useDispatch();

  const handleClick = (e) => {
      e.preventDefault();
      dispatch(actionTypes.fetchWeather(city))
  }

  const handleInputChange = (e) => {
    setCity(e.target.value)
  }

  return (
    <div className="weather-item">
      <div className="weather-item__info">
        <span>{props.dt_txt.replace(" ","     ")}</span>
      </div>
      <div className="weather-item__data">
        <p>temperature {props.temp}</p>
        <p>feels like temperature {props.feels_like}</p>
      </div>
      <div className="weather-item__chip">{props.description}</div>
    </div>
  );
};

export default WeatherItem;
