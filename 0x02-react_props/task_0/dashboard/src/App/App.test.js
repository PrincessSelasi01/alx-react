import React from 'react';
import App from "./App";
import { shallow } from 'enzyme';


const wrapper = shallow(<App />);
describe('App Component', () => {
  it("renders without crashing", () => {
    wrapper
  })

  // it("App renders a div with the class: App-header", () => {
  //  expect(wrapper.find('.App-header'))
  // })

  // it("App renders a div with the class: App-body", () => {
  //  expect(wrapper.find('.App-body'))
  // })

  // it("App renders a div with the class: App-footer", () => {
  //   expect(wrapper.find('.App-footer'))
  //  })
})

