import React from 'react';
import App from "./App";
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import { shallow, mount } from 'enzyme';
import CourseList from '../CourseList/CourseList';
import { listCourses } from './App';
import { StyleSheetTestUtils } from 'aphrodite';

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

let wrapper = shallow(<App />);
describe('App Component', () => {
  it("renders without crashing", () => {
    wrapper
  })

  it("should contain the Header component", () => {
    expect(wrapper.containsMatchingElement(<Header/>)).toEqual(true)
  })

  it("should contain the Login component", () => {
    expect(wrapper.containsMatchingElement(<Login/>)).toEqual(true)
   })

  it("should contain the Footer component", () => {
    expect(wrapper.containsMatchingElement(<Footer/>)).toEqual(true)
   })

  it("does not render CourseList component", () => {
    expect(wrapper.containsMatchingElement(<CourseList/>)).toEqual(false)
  })

  // it('alerts and calls func', () =>{
  //   jest.spyOn(window, 'alert').mockImplementation(() => {});
  //   const spy = jest.spyOn(App.prototype, 'alert')
  //   const wrap = mount(<App logOut={()=>console.log('test')}/>)
  //   // global.alert = jest.fn();
  //   // console.log(App.prototype.alert())
  //   // console.log(wrap.alert())
  //   const event = new KeyboardEvent('keydown', {key:'h', ctrlKey: true})
  //   console.log(window.dispatchEvent(event))
    
  //   expect(window.alert).toHaveBeenCalledTimes(1);
  //   // console.log(wrap.html())
  // })
})

const wrapper_isLoggedIn = shallow(<App isLoggedIn={true}/>);
describe('App Component when isLoggedin is true', () => {
  it("does not render Login component", () => {
    expect(wrapper_isLoggedIn.containsMatchingElement(<Login/>)).toEqual(false)
  })

  it("renders CourseList component", () => {
    expect(wrapper_isLoggedIn.containsMatchingElement(<CourseList listCourses={listCourses}/>)).toEqual(true)
  })
})

