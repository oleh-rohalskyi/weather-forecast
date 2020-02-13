import React from 'react';
import './weather-item.sass';

const WeatherItem = ({props}) => {
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
