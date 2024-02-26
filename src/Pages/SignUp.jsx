import React from 'react'

function SignUp() {
  return (
    <>
    <form className='App'>
      <label type="text" >Name:</label>
      <input type="text" placeholder='Enter Name'/><br/>

      <label type="text">DOB</label>
      <input type="password" placeholder='DOB' /><br />
      <label type="text" >Email Id:</label>
      <input type="text" placeholder='Enter Email'/><br />
      <label type="text">Password:</label>
      <input type="password"  placeholder='Password' /><br />
      <input type="submit" value="Submit" />
      <input type="reset" value="Reset" />
    </form>

    <Login/>
    
    </>
  )
}

export default SignUp