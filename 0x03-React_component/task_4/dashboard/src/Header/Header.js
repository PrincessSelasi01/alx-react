import React from 'react';
import './Header.css';
import logo from '../assets/hbnblogo.jpg';


export default function Header() {
  return (
    <>
      <img src={logo} alt="logo"/>
      <h1>School dashboard</h1>
    </>
  )
}
