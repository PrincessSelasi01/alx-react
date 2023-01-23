import React from 'react';
import Header from './Header';
import { shallow }from 'enzyme';

const wrapper  = shallow(<Header/>)
describe('Header Component', () => {
  it('renders without crashing', ()=>{
    shallow(<Header/>)
  })

  it('renders img and h1 tags', () => {
    expect(wrapper.find('img'))
    expect(wrapper.find('h1'))
  })
})
