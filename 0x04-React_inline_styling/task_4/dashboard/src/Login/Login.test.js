import React from 'react';
import { shallow } from 'enzyme';
import Login from './Login';
import { StyleSheetTestUtils } from 'aphrodite';

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

const wrapper  = shallow(<Login/>)
describe('Login Component', () => {
  it('renders without crashing', ()=>{
    shallow(<Login/>)
  })

  it(' renders 2 input tags and 2 label tags', () => {
    expect(wrapper.find('input').length).toEqual(2)
    expect(wrapper.find('label').length).toEqual(2)
  })
})

