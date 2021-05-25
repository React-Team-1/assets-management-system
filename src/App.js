// import logo from './logo.svg';
import React from "react"
/*import { Router } from "react-router";*/
import './App.css';
import About from "./Component/About/About"
import UploadItems from "./Component/UploadItems/UploadItem"
import AddCategory from "./Component/UploadItems/AddCategory/AddCategory"


function App() {
  return (

    
    <div className="App">

      <AddCategory/>
       {/* <UploadItems /> */}
      
     {/* <About /> */}
    </div>
  );
}

export default App;
