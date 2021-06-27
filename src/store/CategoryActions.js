import * as actionType from "./actions"
import axios from "axios"
// import Store from "./../../src/Component/Store/Store"


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




//category type actions
export const getcategoriesTypeRequest = ()=>{
       return{
             type: actionType.BRAND_TYPE_REQUEST
       }
}



export const getcategoriesTypeRequestSuccess = (value)=>{
    return{
          type: actionType.BRAND_TYPE_REQUEST_SUCCESS,
          payload: value
    }
}






export const getcategoriesType=(type)=>{
      return dispatch => {
            dispatch(getcategoriesTypeRequest);

            dispatch(getcategoriesTypeRequestSuccess(type))

      }
}




//Catgory Brand actions
export const getBrandsRequest = ()=>{
       return{
            type: actionType.BRAND_REQUEST
       }
}


export const getBrandsRequestSuccess = (data)=>{
      return{
            type:actionType.BRAND_REQUEST_SUCCESS,
            payload: data
      }
}


export const getBrandTypes = (brand) =>{
      return dispatch => {
          dispatch(getBrandsRequest);

          dispatch(getBrandsRequestSuccess(brand))
      }
}



//Catgory Brand actions
export const getOwnerRequest = ()=>{
    return{
         type: actionType.OWNER_REQUEST
    }
}


export const getOwnerRequestSuccess = (data)=>{
   return{
         type:actionType.OWNER_REQUEST_SUCCESS,
         payload: data
   }
}


export const getOwnerTypes = (owner) =>{
   return dispatch => {
       dispatch(getOwnerRequest);

       dispatch(getOwnerRequestSuccess(owner))
   }
}







