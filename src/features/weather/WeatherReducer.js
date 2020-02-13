import {REQUEST_WEATHER,RECEIVE_WEATHER,REQUEST_WEATHER_FAIL} from './actionTypes';

const initialState = {
  isFetching: false,
  list: [],
  error: ""
};

export default (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_WEATHER:
      return {...state, isFetching: true}
    case RECEIVE_WEATHER:
      return {...state, isFetching: false, list: action.list}
    case REQUEST_WEATHER_FAIL:
      return {...state, isFetching: false, error: action.error}
    }
    return state
};
