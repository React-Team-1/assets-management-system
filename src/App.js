// import logo from './logo.svg';
import React from "react"
/*import { Router } from "react-router";*/
import './App.css';
import AddNewItem from "./Component/UploadItems/NewItem/AddNewItem";
// import ForgottenPassword from "./Component/ChangePassword/ForgottenPassword"
// import About from "./Component/About/About"
// import {BrowserRouter as Router,Switch,Route} from "react-router-dom"
// import UploadItems from "./Component/UploadItems/UploadItem"
// import AddCategory from "./Component/UploadItems/AddCategory/AddCategory"
// import Inventory from "./Component/Inventory/Inventory"
// import Store from "./Component/Store/Store"
// import Dashboard from "./Component/Dashboard/Dashboard"
// import Landing from "./Component/LandingPage/LandingPage"
// import ProtectedRoute from "./ProtectedRoute"
// import ErrorPage from "./Component/ErrorPage";


export let userState = false;


function App() {
  return (
    //<Router>
          
          
 
              //  {/* <Switch>
                
              //         <Route exact path="/" component={Landing}/>
              //           <ProtectedRoute
              //            exact 
              //            path="/Dashboard"  
              //            component={Dashboard}/>
              //         <ProtectedRoute path="/About" component={About}/>
              //         <ProtectedRoute exact path="/Inventory"  component={Inventory}/>
              //         <ProtectedRoute exact path="/Store"  component={Store}/>
              //         <ProtectedRoute exact path="/UploadItems" component={UploadItems}/>
              //         <ProtectedRoute path="*" component={ErrorPage}/>
              //       {/* <Route path="/EditItems" component={EditItems}/>*/}
              // </Switch>           */}
              <div className="App">
                <AddNewItem />               
              </div>
                   
    //</Router>
    
    
  );
}

export default App;
