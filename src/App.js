// import logo from './logo.svg';
import React from "react"
/*import { Router } from "react-router";*/
import './App.css';
import About from "./Component/About/About"
import {BrowserRouter as Router,Switch,Route} from "react-router-dom"
import UploadItems from "./Component/UploadItems/UploadItem"
import AddCategory from "./Component/UploadItems/AddCategory/AddCategory"
import Inventory from "./Component/Inventory/Inventory"
import Store from "./Component/Store/Store"
import Dashboard from "./Component/Dashboard/Dashboard"
import AssignAssets from "./Component/AssignAssets/AssignAssets"



function App() {
  return (
    <Router>
          <div className="App">
          

              <Switch>
                
                  <Route exact path="/"  component={Dashboard}/>
                  <Route path="/About" component={About}/>
                    <Route exact path="/Inventory"  component={Inventory}/>
                    <Route exact path="/Store"  component={Store}/>
                  {/* <Route path="/EditItems" component={EditItems}/>*/}
              </Switch> 

                  
                  
                 
          </div>
         
          
    </Router>
    
    
  );
}

export default App;
