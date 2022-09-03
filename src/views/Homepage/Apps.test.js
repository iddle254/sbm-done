import React from 'react';
import { shallow } from 'enzyme';
import Apps from './Apps';

it('renders without crashing', () => {
  expect(shallow(<Apps />)).toMatchSnapshot();
});
