import React from 'react';
import { shallow } from 'enzyme';
import BusinessSolutions from './BusinessSolutions';

it('renders without crashing', () => {
  expect(shallow(<BusinessSolutions />)).toMatchSnapshot();
});
