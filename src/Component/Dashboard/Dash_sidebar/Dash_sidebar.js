import React from 'react'
import 'font-awesome/css/font-awesome.min.css';
import "./Dash_sidebar.css";
import logo from "../Assets/logo.png";

const Dash_sidebar = ({ sidebarOpen, closeSidebar }) => {
    return (
        <div className={sidebarOpen ? "sidebar_responsive" : ""} id="sidebar">
            <div className="sidebar_title">
            <div className="sidebar_img">
                <img src={logo} alt="logo"/>
                <h1>Asset Management System</h1>
            </div>
            <i className="fa fa-times"
            id="sidebarIcon"
            onClick={() => closeSidebar()}></i>
            </div>


            <div className="sidebar_menu">
                <div className="sidebar_link active_menu_link">
                    <i className="fa fa-home text-green"></i>
                    <a href="#">Dashboard</a>
                </div>
                <h2>AMS</h2>
                <div className="sidebar_link">
                    <i className="fa fa-user-secret text-green"></i>
                    <a href="#">Admin Management</a>
                </div>

                <div className="sidebar_link">
                    <i className="fa fa-building-o text-green"></i>
                    <a href="#">Stores</a>
                </div>

                <div className="sidebar_link">
                    <i className="fa fa-bar-chart text-green"></i>
                    <a href="#">Inventory</a>
                </div>

                <div className="sidebar_link">
                    <i className="fa fa-history text-green"></i>
                    <a href="#">History</a>
                </div>

                <h2>LEAVE</h2>
                <div className="sidebar_logout">
                    <i className="fa fa-sign-out"></i>
                    <a href="#">Sign out</a>
                </div>



            </div>
            
        </div>
    )
}

export default Dash_sidebar
