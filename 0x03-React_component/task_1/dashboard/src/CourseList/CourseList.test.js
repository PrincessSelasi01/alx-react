import React from 'react';
import CourseList from './CourseList';
import { listCourses } from '../App/App';
import { shallow } from 'enzyme';

const wrapper = shallow(<CourseList/>)
describe('CourseList component when listCourses prop is empty/not specified', () => {
  it('renders without crashing', () => {
   shallow(<CourseList/>)
  })

  it('renders the 2 headings', () => {
    expect(wrapper.find('table thead').children().length).toEqual(2);
  })
})

const wrapper2 = shallow(<CourseList listCourses={listCourses}/>)
const coursesLength = listCourses.length
describe('CourseList component when listCourses prop is empty/not specified', () => {
  it('renders without crashing', () => {
   shallow(<CourseList/>)
  })


  it('renders the 5 different rows', () => {
    expect(wrapper2.find('table thead').children().length).toEqual(2);
    expect(wrapper2.find('table tbody').children().length).toEqual(coursesLength);
  })
})

