import React from 'react'
import {useState} from 'react'
import "./Dashboard.css";
import Dash_sidebar from "./Dash_sidebar/Dash_sidebar";
import Dash_Navbar from "./Dash_navbar/Dash_Navbar";
/*import Charts from "./Charts/Charts"*/
import Main from "./Main/Main";
import {Redirect} from "react-router-dom"
import Auth from "../../Auth"




const Dashboard = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const openSidebar =() => {
        setSidebarOpen(true);
    }

    const closeSidebar =() => {
        setSidebarOpen(false);
    }
  
    if(Auth.isAuthenticated){
        return <div className='Container'>
            <Dash_Navbar sidebarOpen ={sidebarOpen} openSidebar={openSidebar}/>
            <Main/>
            <Dash_sidebar sidebarOpen ={sidebarOpen} closeSidebar={closeSidebar} />
       </div>
    }else{
       return <Redirect to="/"/>
    }
}

export default Dashboard
