import React, { useState } from "react";

function Navbar() {
 const [add,setAdd]=useState(0);

  return (
    <>
<nav className="nav-line">
<ul>
  <li><a href="./home">Home</a></li>
  <li><a href="./offers">Offers</a></li>
  <li><a href="./contact">Contact</a></li>
  <li><a href="./about">About</a></li>
  <li onClick={()=>setAdd(add+1)}><a href="./menu">Menu</a></li>
  
</ul>
</nav>
  </>
  );
}

export default Navbar;