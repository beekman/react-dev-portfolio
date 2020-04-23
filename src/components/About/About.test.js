import React from 'react';
import { shallow } from 'enzyme';
import About from './About';
import data from '../../portfolio-data.js';

describe('About component', () => {
  it('matches snapshot', () => {
    const wrapper = shallow(<About about={data.about}/>);
    expect(wrapper).toMatchSnapshot();
  });
});
