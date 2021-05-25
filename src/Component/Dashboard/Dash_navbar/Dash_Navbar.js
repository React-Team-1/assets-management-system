import "./Dash_Navbar.css";
import 'font-awesome/css/font-awesome.min.css';
import Avatar from "../Assets/Avatar.png" ;
import React from 'react'

const Dash_navbar = ({ sidebarOpen, openSidebar}) => {
    return (
        <nav className="dash-navbar">
            <div className="nav_icon" onClick={() => openSidebar()}>
                <i className="fa fa-bars"></i>
            </div>

            <div className="dash_navbar_left">
                <a className="active_link" href="#">Admin</a>
            </div>

            <div className="dash_navbar_right">
                <a href="#">
                    <i className="fa fa-search"></i>
                </a>

                <a href="#">
                    <i className="fa fa-clock-0"></i>
                </a>

                <a href="#">
                    <img width="30" src={Avatar} alt="Avatar"/>
                </a>


            </div>

        </nav>
        
    )
}

export default Dash_navbar
