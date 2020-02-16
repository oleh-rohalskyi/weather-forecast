import React from 'react';
import {useSelector} from 'react-redux';
import {selectors} from '../../features/weather';

import './weather-list.sass';

import WeatherItem from 'components/WeatherItem';

const WeatherList = () => {
  
  const weather = useSelector(selectors.getUIWeatherData);

  return (
      <ul className="weather-list">
        {weather.map( (item,key)=>
          <WeatherItem key={key} props={item} />
        )}
      </ul>
  );
};

export default WeatherList;
