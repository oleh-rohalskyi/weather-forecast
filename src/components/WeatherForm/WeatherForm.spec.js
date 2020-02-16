import { render, fireEvent, getByTestId, act} from "@testing-library/react-hooks";

import React from 'react';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import WeatherForm from './WeatherForm';


describe('src > components > WeatherForm', () => {

  const mockUp = {}


  const mockStore = configureStore(mockUp);
  const store = mockStore(mockUp);

  jest.spyOn(store, 'dispatch');

  beforeEach(() => {
    store.dispatch.mockClear();
  });

  it('renders without crashing', () => {
    
    const wrapper = mount(
      <Provider store={store}>
        <WeatherForm name="test-form" />
      </Provider>
    );
    // wrapper.find('button').simulate("click")
    // wrapper.debug();
    // console.log(wrapper)
    expect(wrapper).toMatchSnapshot();

  });

});
