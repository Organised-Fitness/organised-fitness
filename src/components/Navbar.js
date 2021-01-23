import React, { useState, useEffect }  from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css'
 
const Navbar = () => {

   const [show, handleShow] = useState(false);

   useEffect(() => {
     window.addEventListener("scroll", () => {
       if (window.scrollY > 100) {
         handleShow(true);
       } else handleShow(false);
       });
       return () => {
         window.removeEventListener("scroll");
       };
   }, []);


    return (
      <div className={`topnav ${show && "nav__grey"}`}>
         <div className="topnav-right">
            <NavLink to="/about">About</NavLink>
            <NavLink to="/weights">Weights</NavLink>
            <NavLink to="/">Home</NavLink>
         </div>
         <div className="logo">
            <img src="images/logo.jpg" alt="logo"/>
         </div> 
      </div>
    );
}
 
export default Navbar;