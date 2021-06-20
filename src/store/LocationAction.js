import * as actionType from "./actions"
import axios from "axios"


///Delete asset Action creators


export const getLocationRequest = ()=>{
    return{
         type: actionType.LOCATION_REQUEST
    }
 }

 
export const getLocationRequestSuccess = (requestInfo)=>{
    return{
         type: actionType.LOCATION_REQUEST_SUCCESS,
         payload:requestInfo
    }
 }


 export const  getLocationRequestFailure = (error)=>{
     console.log(error)
    return{
         type: actionType.LOCATION_REQUEST_FAILURE,
         payload: error
    }
 }


 export const getLocation = ()=>{
       return dispatch =>{
           dispatch(getLocationRequest);
           axios.get("https://rocky-falls-71050.herokuapp.com/locations",
           
            { 
                headers: {
                        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjYwYWQxOTY5ZDUwMjRmMDY0ZmFkYjE4ZSIsInVzZXJuYW1lIjoiYWRtaW4iLCJwYXNzd29yZCI6IiQyeSQxMiR5RUFJWHNXMmR4eThMYzZDcmRLeHVPRjB6SnJ1aGk3RE1kOWtGam9YY0xhS2xiL2g1MGpMcSJ9LCJpYXQiOjE2MjMzMTY4NDl9.C-WYfxP-BLhdGHZL0-pUVahl6EbwR_1eDTXt-2l4hf8'
                    },
            }
           
           ).
           then((response)=>{
               dispatch(getLocationRequestSuccess(response.data.result))
               console.log(response.data.result);
           }).catch((errors)=>{
                 dispatch(getLocationRequestFailure(errors))
           })
       }
 }