import React from 'react'
import {Link} from 'react-router-dom'
function Content() {

  return (
<div>    
  <div className="container">
    <div className="front">
        <div className="leftbox">
    
         <div className="header">
            <img src="swiggy.jpg" alt=''/>
            <h2>Swiggy</h2>
            <button><Link to="./Login">Login</Link></button>
            <button><Link to="./SignUp">SignUp</Link></button>
    
         </div>
    
           <div className="linebox">
             <h1>Late night at office?</h1>
             <p>Order food from favourite restaurants near you.</p>
    
          <div className="placeholder">
             <div className="side">
             <input type="text" placeholder="Enter the delivery location"/>
             <button><a href="/">Food Point</a></button>
             </div>
    
             <h4>POPULAR CITIES IN INDIA</h4>
             <p>Ahmedabad Bangalore Chennai Delhi Gurgaon Hyderabad Kolkata Mumbai Pune & more.</p>
           </div>
    
          </div>
         </div>
    
        
         <div className="rightbox">
            <img src="res food.jpg" alt="right"/>
         </div>
        
      </div>

     
    
     <div className="middle1">
       <div className="middlebox1">
        <div className="box1">
            <h3>No Minimum Order</h3>
            <p>Order in for yourself or for the group, with no restrictions on order value</p>
            <img src="minimum1.png" alt="/"/>

            
        </div>
        <div className="box1">
            <h3>Live Order Tracking</h3>
            <p>Know where your order is at all times, from the restaurant to your doorstep</p>
            <img src="lives.webp" alt=""/>

            
        </div>
        <div className="box3">
            <h3>Lightning-Fast Delivery</h3>
            <p>Experience Swiggy's superfast delivery for food delivered fresh & on time</p>
            <img src="fastest1.webp" alt=""/>

            
        </div>
    
       </div>
    </div>
    
    <div className="middle2">
        <div className="Box1">
            <h2>Restaurants in your pocket</h2>
            <p>Order from your favorite restaurants & track on the go, with the all-new Swiggy app.</p>
    
            <img src="new.png" alt=""/>
            <img src="new2.png" alt=""/>
        </div>
        <div className="Box2">
           <img src="order.png" alt=""/>
        </div>
    </div>

    <footer>
            <div className="footerbox">
                <div className="rbx1">
                <h3>Company</h3>
                <li>About us</li>
                <li>Team</li>
                <li>Careers</li>
                <li>Swiggy Corporate</li>
                <li>Swiggy HDFC Bank Credit Card</li>
        
        
                </div>
        
                <div className="rbx2">
                <h3>Contact</h3>
                <li>Help & Support</li>
                <li>Partner with us</li>
                <li>Ride with us
                </li>
                </div>
        
                <div className="rbx3">
                    <h3>Legal</h3>
                    <li>Terms & Conditions</li>
                    <li>Refund & Cancellation</li>
                    <li>Privacy Policy</li>
                    <li>Offer Terms</li>
                    <li>Corporate  Swiggy Money Codes Terms and Conditions</li>
                    
        
                </div>
        
                <div className="rbx4">
                    <img src="new.png" alt="new"/>
                    <img src="new2.png" alt=""/>
        
                </div>
                
            </div>
            <p id='p'>&copy; 2024 Your Food Website. All rights reserved.</p>
        </footer>
  </div>  
 </div>
  )
}

export default Content
