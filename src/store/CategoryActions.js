import * as actionType from "./actions"
import axios from "axios"


//Category asset action creators


export const getCategoryRequest = ()=>{
     return{
           type: actionType.CATEGORY_REQUEST
     }
}


export const getCategoryRequestSuccess = (requestInfo) =>{
     return{
          type: actionType.CATEGORY_REQUEST_SUCCESS,
          payload: requestInfo
     }
}

export const getCategoryRequestFailure = (error) =>{
    return{
         type: actionType.CATEGORY_REQUEST_FAILURE,
         payload: error
    }
}



export const getCategories = ()=>{
       return dispatch =>{
            dispatch(getCategoryRequest);
            axios.get("https://rocky-falls-71050.herokuapp.com/category",
            
            { 
                headers: {
                        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjYwYWQxOTY5ZDUwMjRmMDY0ZmFkYjE4ZSIsInVzZXJuYW1lIjoiYWRtaW4iLCJwYXNzd29yZCI6IiQyeSQxMiR5RUFJWHNXMmR4eThMYzZDcmRLeHVPRjB6SnJ1aGk3RE1kOWtGam9YY0xhS2xiL2g1MGpMcSJ9LCJpYXQiOjE2MjMzMTY4NDl9.C-WYfxP-BLhdGHZL0-pUVahl6EbwR_1eDTXt-2l4hf8'
                    },
            }

            ).then((response)=>{
                 dispatch(getCategoryRequestSuccess(response.data.data))
                 console.log(response.data.data)
            }).catch((errors)=>{
                 dispatch(getCategoryRequestFailure(errors))
            })




       }
}


