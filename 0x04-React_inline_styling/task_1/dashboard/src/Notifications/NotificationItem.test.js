import React from 'react';
import NotificationItem from './NotificationItem';
import Notifications from './Notifications';
import { shallow } from 'enzyme';
import { StyleSheetTestUtils } from 'aphrodite';

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});


describe('NotificationItem component', () => {
  it('renders without crashing',() => {
    shallow(<NotificationItem/>);
  })

  it('renders the correct html (with given dummy  type and value props)', () => {
    const wrapper = shallow(<NotificationItem type="urgent" value="test"/>);
    const html = wrapper.html()
    // console.log(wrapper.html());
    expect(html).toBe('<li data-notification-type="urgent">test</li>')
  })

  it('renders the correct html (with given dummy html props)', () => {
    const wrapper = shallow(<NotificationItem html={{ __html: '<u>test</u>' }} />);
    const html = wrapper.html()
    expect(html).toBe('<li data-notification-type="default"><u>test</u></li>')
  })

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('spys markAsRead', () => {
    const spy = jest.spyOn(Notifications.prototype, 'markAsRead')
    const wrapper = shallow(<NotificationItem html={{ __html: '<u>test</u>' }} id={1} markAsRead={spy} />);
    wrapper.simulate('click')
    expect(spy).toHaveBeenCalledWith(1);
  })
})

