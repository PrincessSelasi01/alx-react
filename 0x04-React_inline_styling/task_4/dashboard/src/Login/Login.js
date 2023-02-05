import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  login:{
    '@media (max-width: 900px)': {
      display: "block"
    }
  }
})

export default  function Login() {
  return (
    <>
      <label className={css(styles.login)} htmlFor="email">Email: <input type="text" id="email"/></label>
      {/* <input type="text" id="email"/> */}
      <label className={css(styles.login)} htmlFor="password"> Password: <input type="text" id="password"/></label>
      {/* <input type="text" id="password"/> */}
      <button>OK</button>
    </>
  )
}

