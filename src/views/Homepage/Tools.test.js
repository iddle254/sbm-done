import React from 'react';
import { shallow } from 'enzyme';
import Tools from './Tools';

it('renders without crashing', () => {
  expect(shallow(<Tools />)).toMatchSnapshot();
});
