import React from 'react'
import {Route, Redirect} from "react-router-dom"
import auth from "./Auth"

export default function ProtectedRoute({component: Component,...rest}) {
    return (
        
        <Route  {...rest} render={
            (props)=>{
                console.log(auth.isAuthenticated())
                if(auth.isAuthenticated() == true){
                return <Component {...props}/>
                }else{
                   return <Redirect to={{pathname:"/", state:{from:props.location}}}/>
                   
                }
            }
        } /> 
    )
}
