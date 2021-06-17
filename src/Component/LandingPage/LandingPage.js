import React,{useState,useEffect    } from "react"
import {  Field, Form, withFormik, } from "formik"
import * as Yup from "yup"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import * as ReactBoostrap  from "react-bootstrap"
import "./Landingpage.css"
import Axios from "axios"
import Auth from "../../Auth"

import 'core-js/fn/promise/finally'
import { connect } from "react-redux"
import {useHistory} from "react-router-dom"
import App from "../../App"
import { faWindows } from "@fortawesome/free-brands-svg-icons"
import { formatMs } from "@material-ui/core"

let isLoading = false;

const Login = ({
    values,
    errors,
    touched,
    isSubmitting,
   
}) => {
      
    
    let userIcon = <FontAwesomeIcon icon={faUser} />
    
    return (
        <div className="main-container">
            <div className="left-container">
                <p>Assets Management System</p>
            </div>
            <div className="right-container">
                <Form id="form">
                    <div>
                        <p className="userIcon">{userIcon}</p>
                        <label>Admin Login</label>
                        <Field className="input" id="name" type="text" name="username" placeholder="ID Number" />
                        {touched.username && errors.username && <p className="error-message">{errors.username}</p>}
                    </div>
                    <div>
                        <Field className="input" id="pass" type="password" name="password" placeholder="Password" />
                        {touched.password && errors.password && <p className="error-message">{errors.password}</p>}
                    </div>
                    <button type="submit" id="submit" onClick={submitForm} disabled={isSubmitting} >
    
                    { isLoading ?   <ReactBoostrap.Spinner as="span" animation="grow" size="sm" role="status" aria-hidden="true" /> :"Login"}
                  
                    </button>
                </Form>
            </div>
        </div>

    )
} 


const submitForm=()=>{
    isLoading = true;
    const name = document.querySelector("#name").value;
    const pass = document.querySelector("#pass").value;

    if(name === "" || pass === ""){
       setTimeout(()=>{
        // resetForm();
         isLoading = false;
         document.querySelector("#form").reset();

       },1000);

      
    }
   
}





const LandingPage = withFormik({
    
    mapPropsToValues({ username, password }) {
        return {
            username: username || '',
            password: password || ''
        }
    },
    validationSchema: Yup.object().shape({
        // email: Yup.string().email().required(),
        username:Yup.string().required(),
        password: Yup.string().min(4).required()
    }),


    handleSubmit(values, {props, resetForm }) {
     
      
        signIn(props,values,resetForm)

        



      
        resetForm();
       
    },
 
})(Login)




const signIn = async (props,values)=>{
    try{
             
     await Axios.post("https://rocky-falls-71050.herokuapp.com/login",
     values,
     {headers: {'content-Type':'application/json'}})

     .then((response)=>{
          console.log(response.data)
           if(response.status === 200){
              localStorage.setItem('token',response.data.token);

              Auth.login(()=>{
                      props.history.push("/Dashboard")
                  });
                  
              }

      })
     .catch((e)=>{
          console.log(e)
      })

   
 
    }catch(e){
        console.log(e);
    }
}



export default LandingPage;