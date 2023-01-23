import React from 'react';

export default  function Login() {
  return (
    <>
      <label htmlFor="email">Email: </label>
      <input type="text" id="email"/>
      <label htmlFor="password"> Password: </label>
      <input type="text" id="password"/>
      <button>OK</button>
    </>
  )
}

