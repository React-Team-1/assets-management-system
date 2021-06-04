import Store from "../../Component/Store/Store"
import { SETUSERSTATE } from "../actions"


const initialState = {
    auth:false
}

const rootReducer = (state = initialState,action)=>{
    
    
    switch(action.type){
        case  SETUSERSTATE:
            console.log(action.type)
            return{
                auth: true
            }
            default:
             return state;
    }
  
}




export default rootReducer;