import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import logo from '../assets/hbnblogo.jpg';

const styles = StyleSheet.create({
  header: {
    display: "flex",
    alignItems: "center",
    borderBottom: "4px solid #E0354B",
    marginBottom: 60
  },
  
  img: {
    width: 160,
    height: 160
  },
  
  heading: {
    color: "#E0354B"
  }
})

export default function Header() {
  return (
    <div className={css(styles.header)}>
      <img className={css(styles.img)} src={logo} alt="logo"/>
      <h1 className={css(styles.heading)}>School dashboard</h1>
    </div>
  )
}

