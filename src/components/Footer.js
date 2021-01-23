import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className="main-footer">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <ul className="list-unstyled">
                            <p>Address</p>
                            <li>Kaunas, Lithuania</li> 
                            <li>K. DonelaiÄio g. 73, Kaunas 44249</li>  
                        </ul>
                    </div>    
                        <div className="col">
                            <ul className="list-unstyled">
                                <p>Contact</p>
                                <li>(675) 844-7400</li>
                                <li>contact@fitnessorganised.com</li>  
                            </ul>
                        </div>
                </div>
                    <hr />
                <div className="row">
                        <p className = "col-sm">
                            &copy;{new Date().getFullYear()} Organised Fitness | All Rights Reserved | Terms of Service | Privacy
                        </p>
                </div>
            </div>
        </div>
    )
}

export default Footer;