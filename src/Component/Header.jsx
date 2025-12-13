import { LOGO_URL } from "../Assets/images/Logo";
import { useState } from "react";
import { Link } from "react-router-dom";


   const Header = () => { 
    const [BtnName, setBtnName] = useState("Login"); 
    return( 
    <div className="Logo-container"> 
    <img type="module" src={LOGO_URL} alt="Logo-Image" /> 
    <div className="Nav-container"> 
<ul className="UL-lists">
    <li><Link to="/">Home</Link></li>
    <li><Link to="/AboutUs">About Us</Link></li> 
    <li><Link to="/Service">Service</Link></li>
    <li><Link to="/ContactUs">Contact Us</Link></li> 
</ul> 
<button className="login-btn"
 onClick={() => { setBtnName(BtnName === "Login" ? "Logout" : "Login"); }} > {BtnName}
  </button> 
</div> 
 </div> 
 );
     };
 export default Header;