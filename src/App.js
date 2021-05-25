// import logo from './logo.svg';
import React from "react"
/*import { Router } from "react-router";*/
import './App.css';
import About from "./Component/About/About"
import {BrowserRouter as Router} from "react-router-dom"
import UploadItems from "./Component/UploadItems/UploadItem"
import AddCategory from "./Component/UploadItems/AddCategory/AddCategory"


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
