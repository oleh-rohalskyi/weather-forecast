import {REQUEST_WEATHER,RECEIVE_WEATHER} from './actionTypes';

const initialState = {
  isFetching: false,
  list: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_WEATHER:
      return {...state, isFetching: true}
    case RECEIVE_WEATHER:
      return {...state, isFetching: false, list: action.list}
    }
    return state
};
