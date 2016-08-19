/* eslint-disable */
import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';
import Navbar from '../components/navbar/Navbar'
import config from '../../common/config';

describe("App component", () => {
  it("should contains the navbar", () => {
    expect(shallow(<App />).contains(<Navbar />)).toBe(true);
  });
});
