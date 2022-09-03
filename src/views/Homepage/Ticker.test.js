import React from 'react';
import { shallow } from 'enzyme';
import Ticker from './Ticker';

it('renders without crashing', () => {
  expect(shallow(<Ticker />)).toMatchSnapshot();
});
