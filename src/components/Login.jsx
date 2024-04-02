import React from 'react';

function Login() {
  return (
    <div className="login">      
    <div className="SignUpPage">
      <form className="App">
        <label type="text">Email Id:</label>
        <input type="text" placeholder="Enter Email" />
        <br />
        <label type="text">Password:</label>
        <input type="password" placeholder="Password" />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  
</div>

  );
}

export default Login