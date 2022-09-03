import React from 'react';
import { shallow } from 'enzyme';
import Nav1 from './Nav1';

it('renders without crashing', () => {
  expect(shallow(<Nav1 />)).toMatchSnapshot();
});
