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
                <Link to="/" className="dashbaord">
                    <li>Dashboard</li>
                </Link>

                <Link to="/" className="stores">
                    <li>Stores</li>
                </Link>

                <Link to="/" className="inventory">
                    <li>Inventory</li>
                </Link>

                <Link to="/" className="about">
                    <li>About</li>
                </Link>

                <Link to="/" className="signup">
                    <li>Sign Up</li>
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
