import React from 'react';
import { shallow } from 'enzyme';
import Contact from './Contact';
import data from '../../portfolio-data.js';

describe('Contact component', () => {
  it('matches snapshot', () => {
    const wrapper = shallow(<Contact contact={data.contact} />);
    expect(wrapper).toMatchSnapshot();
  });
});
