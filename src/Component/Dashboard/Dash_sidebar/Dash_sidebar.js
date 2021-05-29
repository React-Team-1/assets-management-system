import React from 'react'
import 'font-awesome/css/font-awesome.min.css';
import "./Dash_sidebar.css";
import logo from "../Assets/logo.png";
import {Link} from "react-router-dom"
import auth from "../../../Auth"
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

const Dash_sidebar = ({ sidebarOpen, closeSidebar,props }) => {
    let history = useHistory();
    return (
        <div className={sidebarOpen ? "sidebar_responsive" : ""} id="sidebar">
            <div className="sidebar_title">
            <div className="sidebar_img">
                <img src={logo} alt="logo"/>
                <h1>ASM</h1>
            </div>
            <i className="fa fa-times"
            id="sidebarIcon"
            onClick={() => closeSidebar()}></i>
            </div>


            <div className="sidebar_menu">
                <div className="sidebar_link active_menu_link">
                    <i className="fa fa-home text-black"></i>
                    <Link to="">Dashboard</Link>
                </div>
                <h2>AMS</h2>
                <div className="sidebar_link">
                    <i className="fa fa-user-secret text-green"></i>
                    <a href="#">Admin Management</a>
                </div>

                <div className="sidebar_link">
                    <i className="fa fa-building-o text-green"></i>
                    <Link to="/Store">Store</Link>
                </div>

                <div className="sidebar_link">
                    <i className="fa fa-bar-chart text-green"></i>
                    <Link to="/Inventory">Inventory</Link>
                </div>

                <div className="sidebar_link">
                    <i className="fa fa-history text-green"></i>
                    <a href="#">History</a>
                </div>

                <h2>LEAVE</h2>
                <div className="sidebar_logout">
                    <i className="fa fa-sign-out"></i>
                    <a id="logoutButton" onClick={()=>{
                        auth.logOut(()=>{
                            // let history = useHistory();
                           history.push("/")
                        })
                    }}>Logout</a>
                </div>



            </div>
            
        </div>
    )
}

export default Dash_sidebar
