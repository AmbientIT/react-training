/* eslint-disable */
import React from 'react';
import { shallow } from 'enzyme';
import App from './App.jsx';

describe("App component suite", function() {
  it("should contains the correct string", function() {
    expect(shallow(<App />).contains(<div>Webpack is doing its thing with React and ES2015</div>)).toBe(true);
  });
});
