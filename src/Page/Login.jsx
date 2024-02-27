import React, { useState } from 'react'

function Login() {
  const [showLoginPage,setShowLoginPage]=useState(false)

  const toggleLoginPage=()=>{
    setShowLoginPage(!showLoginPage)
  };

  return (
    <div>
      <button onClick={toggleLoginPage}>Click Here</button>
      {showLoginPage && (
        <div className="LoginPage">
          <form className='App'>
           <label type="text" >Email Id:</label>
           <input type="text" placeholder='Enter Email'/><br />
           <label type="text">Password:</label>
           <input type="password"  placeholder='Password' /><br />
           <input type="submit" value="Submit" />
          </form>
    
        </div>
      )}
    </div>
    
  );
}

export default Login