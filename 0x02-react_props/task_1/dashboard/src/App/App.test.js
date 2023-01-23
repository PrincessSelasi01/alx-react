import React from 'react';
import App from "./App";
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import Notifications from '../Notifications/Notifications';
import { shallow } from 'enzyme';


const wrapper = shallow(<App />);
describe('App Component', () => {
  it("renders without crashing", () => {
    wrapper
  })

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
})

