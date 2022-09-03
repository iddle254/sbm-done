import React from 'react';
import { shallow } from 'enzyme';
import EliteBanking from './EliteBanking';

it('renders without crashing', () => {
  expect(shallow(<EliteBanking />)).toMatchSnapshot();
});
