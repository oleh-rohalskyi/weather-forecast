import React from 'react';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import WheatherList from './WeatherList';

describe('src > components > WeatherList', () => {

  const mockUp = [{
    clouds: { all: 100 },
    dt: 1581768000,
    dt_txt: "2020-02-15 12:00:00",
    main: { temp: 283.47, feels_like: 278.81},
    sys: { pod: "d" },
    weather: [{ id: 804, main: "Clouds", description: "overcast clouds", icon: "04d" }],
    wind: { speed: 5.19, deg: 199 },
  },{
    clouds: {all: 95},
    dt: 1581778800,
    dt_txt: "2020-02-15 15:00:00",
    main: {temp: 283.93, feels_like: 279.39},
    sys: {pod: "d"},
    weather: [{id: 804, main: "Clouds", description: "overcast clouds", icon: "04d"}],
    wind: {speed: 5.1, deg: 195},
  }]


  const mockStore = configureStore({
    weather: {
      list: []
    }
  });
  const store = mockStore({
    weather: {
      list: mockUp
    }
  });

  jest.spyOn(store, 'dispatch');

  beforeEach(() => {
    store.dispatch.mockClear();
  });

  it('renders without crashing', () => {
    
    const wrapper = mount(
      <Provider store={store}>
        <WheatherList />
      </Provider>
    );

    expect(wrapper).toMatchSnapshot();

  });

});
