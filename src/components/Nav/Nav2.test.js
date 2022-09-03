import React from 'react';
import { shallow } from 'enzyme';
import Nav2 from './Nav2';

it('renders without crashing', () => {
  expect(shallow(<Nav2 />)).toMatchSnapshot();
});
