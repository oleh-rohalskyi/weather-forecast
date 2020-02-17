import React from 'react';
import { mount } from 'enzyme';
import WeatherItem from './WeatherItem';


describe('src > components > WeatherItem', () => {

  const mockUp = {
    temp: "36.6",
    feels_like: "42",
    description: "Thunderly",
    dt_txt: "2020-02-15 12:00:00"
  }

  it('renders without crashing', () => {

    const wrapper = mount(
      <WeatherItem key={0} props={mockUp} />
    );
    expect(wrapper).toMatchSnapshot();

  });

});
