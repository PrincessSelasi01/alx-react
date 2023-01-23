import React from 'react';
import Notifications from "./Notifications";
import NotificationItem from "./NotificationItem";
import { shallow } from 'enzyme';

const wrapper = shallow(<Notifications displayDrawer={true}/>);
describe('Notifications Component when displayDrawer prop is true', () => {
  it("renders without crashing", () => {
    wrapper
  })

  it("renders Notifications div", () => {
    expect(wrapper.find('.Notifications').exists()).toEqual(true)
  })

  it("renders three list items", () => {
    expect(wrapper.find('ul').children().length).toEqual(3);
  })

  it("renders the text: 'Here is the list of notifications'", () => {
    expect(wrapper.containsMatchingElement(<p>Here is the list of notifications</p>));
  })

  it("renders first NotificationItem element with the right html", () => {
    const firstChild = wrapper.find('ul').children().first();
    // console.log(firstChild.html())
    expect(firstChild.html()).toBe('<li data-notification-type="default">New course available</li>');
  })

  it("renders div with menuItem class", () => {
    expect(wrapper.find('.menuItem').exists()).toEqual(true)
  })
})

const wrapper_displayFalse = shallow(<Notifications displayDrawer={false}/>);
describe('Notifications Component when displayDrawer prop is false', () => {
  it("renders div with menuItem class", () => {
    expect(wrapper.find('.menuItem').exists()).toEqual(true)
  })

  it("does not render Notifications div", () => {
    expect(wrapper_displayFalse.find('.Notifications').exists()).toEqual(false)
  })

})

