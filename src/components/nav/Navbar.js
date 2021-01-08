import React from 'react'
import './Navbar.css'

class Navbar extends React.Component{
    render() {
        return (
            <nav className = "nav">
              <ul className = "main-nav">
                <img className = "logo" src= "logo.png" alt="logo"/>
                <li><a href="">Home</a></li>
                <li><a href="">Workouts</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Contact</a></li>
              </ul>
            </nav>
        );
    }
}


export default Navbar;  