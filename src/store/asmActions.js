import * as actionType from "./actions"
import axios from "axios"

export const fetchAssetsRequest = ()=>{
    return{
        type: actionType.FETCH_ASSETS_REQUEST
    }
}


export const fetchAssetsSucess = assets =>{
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



