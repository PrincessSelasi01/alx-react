import React from 'react';
import App from "./App";
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import Notifications from '../Notifications/Notifications';
import { shallow, mount } from 'enzyme';
import CourseList from '../CourseList/CourseList';
import { listCourses } from './App';


let wrapper = shallow(<App />);
describe('App Component', () => {
  it("renders without crashing", () => {
    wrapper
  })
1
  it("should contain the Notifications component", () => {
   expect(wrapper.find(<Notifications />))
  })

  it("should contain the Header component", () => {
    expect(wrapper.find(<Header />))
  })

  it("should contain the Login component", () => {
    expect(wrapper.find(<Login />))
   })

  it("should contain the Footer component", () => {
    expect(wrapper.find(<Footer />))
   })

  it("does not render CourseList component", () => {
    expect(wrapper.containsMatchingElement(<CourseList/>)).toEqual(false)
  })

  // it('alerts and calls func', () =>{
  //   const spy = jest.spyOn(App.prototype, 'alert')
  //   const wrap = mount(<App logOut={()=>console.log('test')}/>)
  //   // console.log(App.prototype.alert())
  //   // console.log(wrap.alert())
  //   const event = new KeyboardEvent('keydown', {key:'h', ctrlKey: true})
  //   console.log(document.dispatchEvent(event))
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
