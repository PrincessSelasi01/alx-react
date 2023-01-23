import React from 'react';
import './App.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import Notifications from '../Notifications/Notifications';
import CourseList from '../CourseList/CourseList';



function App(props) {
  const LoginStatus = () => {
    if (props.isLoggedIn) {
      return <CourseList/>
    } else {
      return (
        <div className="App-body"><p>Login to access the full dashboard</p>
          <Login/>
        </div>
      )
    }
  }
  return (
    <>
      <Notifications/>
      <div className="App-header">
        <Header/>
      </div>
      {LoginStatus()}
      <div className="App-footer">
        <Footer />
      </div>
    </>

  );
}

App.defaultProps = {isLoggedIn: false}

export default App;

