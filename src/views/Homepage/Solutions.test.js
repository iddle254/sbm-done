import React from 'react';
import { shallow } from 'enzyme';
import Solutions from './Solutions';

it('renders without crashing', () => {
  expect(shallow(<Solutions/>)).toMatchSnapshot();
});