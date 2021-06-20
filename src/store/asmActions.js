import * as actionType from "./actions"
import axios from "axios"

export const fetchAssetsRequest = ()=>{
    return{
        type: actionType.FETCH_ASSETS_REQUEST
    }
}


export const fetchAssetsSucess = assets =>{
    console.log(assets)
    return{
        type: actionType.FETCH_ASSETS_SUCESS,
        payload:assets
    }
}

export const fetchAssetsError = error =>{
    return{
        type:actionType.FETCH_ASSETS_FAILURE,
        payload:error
    }
}




export const getAssets =()=>{

    return dispatch =>{
     
    dispatch(fetchAssetsRequest())
    
   

   setTimeout(() => {
     
    axios.get("https://rocky-falls-71050.herokuapp.com/assets",
    { 
        headers: {
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjYwYWQxOTY5ZDUwMjRmMDY0ZmFkYjE4ZSIsInVzZXJuYW1lIjoiYWRtaW4iLCJwYXNzd29yZCI6IiQyeSQxMiR5RUFJWHNXMmR4eThMYzZDcmRLeHVPRjB6SnJ1aGk3RE1kOWtGam9YY0xhS2xiL2g1MGpMcSJ9LCJpYXQiOjE2MjMzMTY4NDl9.C-WYfxP-BLhdGHZL0-pUVahl6EbwR_1eDTXt-2l4hf8'
                },
        }
    ).then((response)=>{
         
     const assets = response.data.data;
     dispatch(fetchAssetsSucess(assets))
 
     //    if(response.status === 200){
     //        // console.log("This is me", response.data.data.length);
     //        let returnedValues = response.data.data;
     //        // console.log(returnedValues.length)
     //        this.props.getAssets(returnedValues);
     //    }
            
    }).catch((error)=>{
         dispatch(fetchAssetsError(error.message))
    })
 
       
   }, 5000);


    }

}

// Issue Asset actions
export const issueAssetRequest = ()=>{
    return{
        type:actionType.ISSUE_ASSET_REQUEST
    }
}

export const IssueAssetFailure =(error)=>{
     return{
         type:actionType.ISSUE_ASSET_FAILURE,
         payload: error
     }
}

export const issueAssetSuccess = (message)=>{
    return{
         type: actionType.ISSUE_ASSET_SUCCESS,
         payload: message

    }
}



export const issueAsset = (details)=>{
    console.log(details)
    return dispatch =>{
        dispatch(issueAssetRequest());

        setTimeout(() => {

        }, 5000 )
        
        axios.put("https://rocky-falls-71050.herokuapp.com/issue/"+details.id,
        details,
        { 
            headers: {
                        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjYwYWQxOTY5ZDUwMjRmMDY0ZmFkYjE4ZSIsInVzZXJuYW1lIjoiYWRtaW4iLCJwYXNzd29yZCI6IiQyeSQxMiR5RUFJWHNXMmR4eThMYzZDcmRLeHVPRjB6SnJ1aGk3RE1kOWtGam9YY0xhS2xiL2g1MGpMcSJ9LCJpYXQiOjE2MjMzMTY4NDl9.C-WYfxP-BLhdGHZL0-pUVahl6EbwR_1eDTXt-2l4hf8'
                    },
        }
        ).then((response)=>{
            console.log(response.data)
            dispatch(issueAssetSuccess(response.data))
        }).catch((error)=>{
            dispatch(IssueAssetFailure(error.message))
        })
      
    }
}



// Return assets
export const returnAssetRequest = ()=>{
    return{
        type:actionType.RETURN_ASSET_REQUEST
    }
}

export const returnAssetFailure =(error)=>{
    return{
        type:actionType.RETURN_ASSET_FAILURE,
        payload: error
    }
}

export const returnAssetSuccess = (message)=>{
   return{
        type: actionType.RETURN_ASSET_SUCCESS,
        payload: message

   }
}



export const returnAsset = (details)=>{
    console.log(details)
    return dispatch =>{
        dispatch(returnAssetRequest);

        setTimeout(() => {
            
            axios.put("https://rocky-falls-71050.herokuapp.com/return/"+details.id,
        details,
        { 
            headers: {
                        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjYwYWQxOTY5ZDUwMjRmMDY0ZmFkYjE4ZSIsInVzZXJuYW1lIjoiYWRtaW4iLCJwYXNzd29yZCI6IiQyeSQxMiR5RUFJWHNXMmR4eThMYzZDcmRLeHVPRjB6SnJ1aGk3RE1kOWtGam9YY0xhS2xiL2g1MGpMcSJ9LCJpYXQiOjE2MjMzMTY4NDl9.C-WYfxP-BLhdGHZL0-pUVahl6EbwR_1eDTXt-2l4hf8'
                    },
        }
        ).then((response)=>{
            console.log(response.data)
            dispatch(returnAssetSuccess(response.data))

        }).catch((error)=>{
            dispatch(returnAssetFailure(error.message))
        })

        }, 5000 )
        
        
      
    }
}




///get people request 


export const getPeopleRequest = ()=>{
    return{
         type: actionType.GET_PEOPLE_REQUEST
    }
 }

 
export const getPeopleSuccess = (people)=>{
    return{
         type: actionType.GET_PEOPLE_SUCCESS,
         payload:people
    }
 }


 export const getPeopleFailure = (error)=>{
    return{
         type: actionType.GET_PEOPLE_FAILURE,
         payload: error
    }
 }


 export const getPeople = ()=>{
       return dispatch =>{
           dispatch(getPeopleRequest);
           axios.get("https://rocky-falls-71050.herokuapp.com/people",
            
            { 
                headers: {
                        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjYwYWQxOTY5ZDUwMjRmMDY0ZmFkYjE4ZSIsInVzZXJuYW1lIjoiYWRtaW4iLCJwYXNzd29yZCI6IiQyeSQxMiR5RUFJWHNXMmR4eThMYzZDcmRLeHVPRjB6SnJ1aGk3RE1kOWtGam9YY0xhS2xiL2g1MGpMcSJ9LCJpYXQiOjE2MjMzMTY4NDl9.C-WYfxP-BLhdGHZL0-pUVahl6EbwR_1eDTXt-2l4hf8'
                    },
            }
           
           ).
           then((response)=>{
               dispatch(getPeopleSuccess(response.data.people))
            //    console.log(response.data.people);
           })
       }
 }







 
///Delete asset requests


export const deleteAssetRequest = ()=>{
    return{
         type: actionType.DELETE_ASSET_REQUEST
    }
 }

 
export const deleteAssetRequestSuccess = (requestInfo)=>{
    return{
         type: actionType.DELETE_ASSET_SUCCESS,
         payload:requestInfo
    }
 }


 export const  deleteAssetRequestFailure = (error)=>{
     console.log(error)
    return{
         type: actionType.DELETE_ASSET_FAILURE,
         payload: error
    }
 }


 export const deleteItem = (data)=>{
       return dispatch =>{
           dispatch(deleteAssetRequest);
           axios.delete("https://rocky-falls-71050.herokuapp.com/assets/"+data.assetID,
           
            { 
                user: data.currentUser,
                headers: {
                        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjYwYWQxOTY5ZDUwMjRmMDY0ZmFkYjE4ZSIsInVzZXJuYW1lIjoiYWRtaW4iLCJwYXNzd29yZCI6IiQyeSQxMiR5RUFJWHNXMmR4eThMYzZDcmRLeHVPRjB6SnJ1aGk3RE1kOWtGam9YY0xhS2xiL2g1MGpMcSJ9LCJpYXQiOjE2MjMzMTY4NDl9.C-WYfxP-BLhdGHZL0-pUVahl6EbwR_1eDTXt-2l4hf8'
                    },
            }
           
           ).
           then((response)=>{
               dispatch(deleteAssetRequestSuccess(response.data))
            //    console.log(response.data);
           }).catch((errors)=>{
                 dispatch(deleteAssetRequestFailure(errors))
           })
       }
 }