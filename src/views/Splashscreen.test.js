import React from 'react';
import { shallow } from 'enzyme';
import Splashscreen from './Splashscreen';

it('renders without crashing', () => {
  expect(shallow(<Splashscreen />)).toMatchSnapshot();
});
