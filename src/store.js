
import WeatherReducer from './features/weather/WeatherReducer';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

import logger from 'redux-logger'

const reducer = {
  weather: WeatherReducer
}

const middleware = [...getDefaultMiddleware(), logger]

const store = configureStore({
  reducer,
  middleware,
  devTools: process.env.NODE_ENV !== 'production',
})

export default store;