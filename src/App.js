// import logo from './logo.svg';
import React from "react"
/*import { Router } from "react-router";*/
import './App.css';
import About from "./Component/About/About"
import Inventory from "./Component/Inventory/Inventory";
import Store from "./Component/Store/Store";
import {BrowserRouter as Router,Switch, Route} from "react-router-dom"



function App() {
  return (
    <Router>
          <div className="App">
          

              <Switch>
                
                  {/* <Route path="/Store"  component={Store}/> */}
                  <Route path="/About" component={About}/>
                    <Route exact path="/Inventory"  component={Inventory}/>
                    <Route path="/Store"  component={Store}/>
                  {/* <Route path="/EditItems" component={EditItems}/> */}
              </Switch>

                  
                 
          </div>
         
          
    </Router>
    
    
  );
}

export default App;
