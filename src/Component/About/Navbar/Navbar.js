import React, {useState} from 'react';
import {Link} from "react-router-dom";
import "./Navbar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { faBars} from '@fortawesome/free-solid-svg-icons'


const Navbar = () => {
    let barsIcon = <FontAwesomeIcon icon={faTimes} />
    let timesIcon = <FontAwesomeIcon icon={faBars} />
   

    const [isMobile, setIsMobile] = useState(false);
    return (
        <nav className="navbar">
            <h3 className="logo">Logo</h3>
            <ul 
                className={isMobile?  "nav-links-mobile" :"nav-links" }
                onClick={() => setIsMobile(false)}
            >
                <Link to="/Dashboard" className="dashbaord">
                    <li>Dashboard</li>
                </Link>

                <Link to="/Store" className="stores">
                    <li>Stores</li>
                </Link>

                <Link to="/Inventory" className="inventory">
                    <li>Inventory</li>
                </Link>

                <Link to="/About" className="about">
                    <li>About</li>
                </Link>

                <Link to="/" className="signup">
                    <li></li>
                </Link>


            </ul>
            <button className="mobile-menu-icon"
                onClick={() => setIsMobile(!isMobile)}
            >
                { isMobile ?  barsIcon :timesIcon }
            </button>
        </nav>
    )
}

export default Navbar
