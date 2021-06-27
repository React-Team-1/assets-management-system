// import logo from './logo.svg';
import React from "react"
/*import { Router } from "react-router";*/
import './App.css';
import About from "./Component/About/About"
import {BrowserRouter as Router,Switch,Route} from "react-router-dom"
import AddNewItem from "./Component/UploadItems/NewItem/AddNewItem"
import UploadItems from "./Component/UploadItems/UploadItem"
import Inventory from "./Component/Inventory/Inventory"
import Store from "./Component/Store/Store"
import Dashboard from "./Component/Dashboard/Dashboard"
import Landing from "./Component/LandingPage/LandingPage"
import ProtectedRoute from "./ProtectedRoute"
import ErrorPage from "./Component/ErrorPage";
import ViewItem from "./Component/Store/ViewItem/ViewItem"
import People from "./Component/People/People"







export let userState = false;


function App() {
  return (
    <Router>
          
          
 
               <Switch>
                
                      <Route exact path="/" component={Landing}/>
                        <ProtectedRoute
                         exact 
                         path="/Dashboard"  
                         component={Dashboard}/>
                      <ProtectedRoute path="/About" component={About}/>
                      <ProtectedRoute exact path="/Inventory"  component={Inventory}/>
                      <ProtectedRoute exact path="/Store"  component={Store}/>
                      <ProtectedRoute exact path="/UploadItems" component={UploadItems}/>
                      <ProtectedRoute exact path="/People" component={People}/>
                      <ProtectedRoute exact path="/AddNewItem" component={AddNewItem}/>
                      <ProtectedRoute exact path="/ViewItem" component={ViewItem}/>

                      <ProtectedRoute path="*" component={ErrorPage}/>
                      <ProtectedRoute path="*" component={ViewItem}/>
                     
              </Switch> 

            
        
        
        


              

            


                  
                  
    </Router>
    
  );
}

export default App;
