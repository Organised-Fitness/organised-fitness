import React from 'react'
import './Navbar.css'

class Navbar extends React.Component{
    render() {
        return (
            <div className = "nav">
              <ul>
                <img src= "logo.png" style={{width:130, marginTop: 0}} alt="logo"/>
                <li>Contact</li>
                <li>Workouts</li>
                <li>About</li>
                <li>Home</li>
              </ul>
            </div>
        );
    }
}


export default Navbar;