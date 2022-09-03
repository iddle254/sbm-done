import React from 'react';
import { shallow } from 'enzyme';
import LoanCalculator from './LoanCalculator';

it('renders without crashing', () => {
  expect(shallow(<LoanCalculator />)).toMatchSnapshot();
});
