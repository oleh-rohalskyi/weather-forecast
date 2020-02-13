
import thunkMiddleware from 'redux-thunk'
import {createLogger} from 'redux-logger'
import {createStore, applyMiddleware, combineReducers} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension';
import WeatherReducer from './features/weather/WeatherReducer';

/* Create root reducer, containing all features of the application */
const rootReducer = combineReducers({
  weather: WeatherReducer,
});

const loggerMiddleware = createLogger()

const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(
    thunkMiddleware, 
    loggerMiddleware 
  ) 
));

export default store;
