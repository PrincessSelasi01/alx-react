import React from 'react';
import Notifications from "./Notifications";
import { shallow } from 'enzyme';

const wrapper = shallow(<Notifications />);
describe('Notifications Component', () => {
  it("renders without crashing", () => {
    wrapper
  })

  it("renders three list items", () => {
    expect(wrapper.find('ul').children().length).toEqual(3);
  })

  it("renders the text: 'Here is the list of notifications'", () => {
    expect(wrapper.containsMatchingElement(<p>Here is the list of notifications</p>));
  })



})

