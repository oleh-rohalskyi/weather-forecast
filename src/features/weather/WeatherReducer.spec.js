import {
  REQUEST_WEATHER,
  RECEIVE_WEATHER,
  REQUEST_WEATHER_FAIL,
  CALL_FROM_WEATHER_FORM
} from './actionTypes';

import WeatherReducer, {initialState} from './WeatherReducer';

describe('features > counter > CounterReducer', () => {
  /* All test cases are very simple, since Redux reducers are pure functions */
  it('returns initial state, if non matched action is provided', () => {

    const action = {
      type: 'NO_EXISTING_ACTION',
    };

    expect(WeatherReducer(initialState, action)).toBe(initialState);

  });

  it(`set isFetching value, if ${REQUEST_WEATHER} action is provided`, () => {

    /* State we expect after action dispatched */
    const expectedState = {
      isFetching: true,
      list: [],
      error: ""
    }

    const action = {
      type: REQUEST_WEATHER,
    };

    expect(WeatherReducer(initialState, action)).toEqual(expectedState); // use `toEqual` matcher instead of `toBe`, since latter assumes object equality
 
  });
});
