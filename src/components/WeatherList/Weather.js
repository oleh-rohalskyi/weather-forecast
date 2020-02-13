import React from 'react';
import {useSelector} from 'react-redux';
import {selectors} from '../../features/weather';

import './weather.sass'

import WeatherItem from 'components/WeatherItem'

const WeatherList = () => {
  /* Get count value from Redux store. We defined selector (state => state.counter.value) inside counter feature folder, to make component Redux agnostic */
  const weather = useSelector(selectors.getUIWeatherData);

  return (
      <div>
        {weather.map(item=>
          <WeatherItem props={item} />
        )}
      </div>
  );
};

export default WeatherList;
