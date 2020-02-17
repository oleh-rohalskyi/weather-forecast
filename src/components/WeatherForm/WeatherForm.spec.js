
import thunk from "redux-thunk";
import fetch from "jest-fetch-mock";
import React from 'react';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import WeatherForm from './WeatherForm';
import {actionTypes} from 'features/weather';
import {fetchWeather} from 'features/weather/actionTypes';

const storeMockUp = {
  weather: {
    isFetching: false,
    list: [],
    error: "",
    city: ""
  }
}

  
describe('src > components > WeatherForm', () => {
  it('renders without crashing', () => {
    
    let store;
    
    const mockStore = configureStore(storeMockUp);
    
    store = mockStore({
      weather: {
        isFetching: false,
        list: [],
        error: "",
        city: ""
      }
    });

    const wrapper = mount(
      <Provider store={store}>
        <WeatherForm name="test-form" />
      </Provider>
    );
  
    expect(wrapper).toMatchSnapshot();
  
  });
})

describe('src > components > WeatherForm', () => {

  let store;

  const setState = jest.fn();
  const useStateSpy = jest.spyOn(React, 'useState')
  useStateSpy.mockImplementation((init) => [init, setState]);

  const mockStore = configureStore([thunk]);


  beforeEach(() => {

    fetch.resetMocks();

    store = mockStore(storeMockUp);
    
    jest.spyOn(store, 'dispatch');

  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('Simulate click',async () => {

    const wrapper = mount(
      <Provider store={store}>
        <WeatherForm name="test-form"/>
      </Provider>
    );
    
    wrapper.find('button').simulate('click');
   
    expect(store.dispatch).toHaveBeenCalledTimes(2);

  });

  it('Does a fetchWeather action successful', () => {

    const expectedActions = [
      expect.objectContaining({
        city: expect.any(String),
        type: actionTypes.REQUEST_WEATHER,
      }),
      expect.objectContaining({
        list: expect.any(Array),
        type: actionTypes.RECEIVE_WEATHER
      })
    ];
    
    return (
      store.dispatch(fetchWeather("Berlin")).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      })
      );
    });
    
    it('Does a fetchWeather action when error', () => {
      
      const expectedActions = [
        expect.objectContaining({
          city: expect.any(String),
          type: actionTypes.REQUEST_WEATHER,
        }),
        expect.objectContaining({
          error: "city not found",
          type: actionTypes.REQUEST_WEATHER_FAIL
        })
      ];

      return (
        store.dispatch(fetchWeather("TOKIO 3")).then(() => {
          expect(store.getActions()).toEqual(expectedActions);
        })
      );

  });

});
