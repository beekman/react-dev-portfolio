import React from 'react';
import { shallow } from 'enzyme';
import Portfolio from './Portfolio';

describe('Portfolio component', () => {
  it('matches snapshot', () => {
    const wrapper = shallow(<Portfolio />);
    expect(wrapper).toMatchSnapshot();
  });
});
