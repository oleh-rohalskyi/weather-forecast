import React from 'react';
import './weather-item.sass';

const WeatherItem = ({props}) => {

  let {temp,feels_like,description,dt_txt} = props;
  let [date,time] = dt_txt.split(" ");

  return (
    <div className="weather-item">
      <div className="weather-item__info">
        <span>{date}</span>
        <span>{time}</span>
      </div>
      <div className="weather-item__data">
        <p>temperature: {temp}</p>
        <p>feels like temperature: {feels_like}</p>
      </div>
      <div className="weather-item__chip">{description}</div>
    </div>
  );
};

export default WeatherItem;
