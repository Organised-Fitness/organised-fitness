import React from 'react'
import './Navbar.css'

class Navbar extends React.Component{
    render() {
        return (
            <div className = "nav">
              <ul>
                <li>Home</li>
                <li>About</li>
                <li>FAQ</li>
                <li>Contact</li>
              </ul>
            </div>
        );
    }
}


export default Navbar;