import React from 'react';
import {Provider} from 'react-redux';
import {mount} from 'enzyme';
import configureStore from 'redux-mock-store';
import {actionTypes} from '../../features/weather';
import WeatherForm from './WeatherForm';

describe('src > components > Weather', () => {
  /* Create mock store with count value */
  const mockStore = configureStore([]);
  
  const store = mockStore({
    city: "Berlin"
  });

  /* Add jest mock spy to watch for store.dispatch method. See https://jestjs.io/docs/en/jest-object#jestspyonobject-methodname for more info */
  jest.spyOn(store, 'dispatch');

  /* Jest hook which runs before each test, https://jestjs.io/docs/en/api#beforeeachfn-timeout */
  beforeEach(() => {
    /* Clear any saved mock data from previous tests, because jest saves calls data for spies and mocks, https://jestjs.io/docs/en/mock-function-api#mockfnmockclear */
    store.dispatch.mockClear();
  });

  it('renders without crashing', () => {
    /* We can only use enzyme `mount`, no `shallow`, since we are using React hooks, which `shallow` doesn't support */
    const wrapper = mount(
      <Provider store={store}>
        <WeatherForm />
      </Provider>
    );
    
    /* Basic snapshot test to make sure, that rendered component matches expected footprint. */
    expect(wrapper).toMatchSnapshot();

  });

  it('dispatches an action on button click', () => {
    
    const wrapper = mount(
      <Provider store={store}>
        <WeatherForm />
      </Provider>
    );

    /* Search for the button and make enzyme click on it */
    wrapper.find('button').simulate('click');

    /* Check if store.dispatch method was run */
    expect(store.dispatch).toHaveBeenCalledTimes(1);

    /* Check if store.dispatch was run with correct action */
    expect(store.dispatch).toHaveBeenCalledWith({
      type: actionTypes.REQUEST_WEATHER
    });
    
  });
});