import * as actionType from "../actions"

const initialState = {
    loading:false,
}


const locationReducer =(state=initialState,action)=>{
       
    switch(action.type){
        case actionType.LOCATION_REQUEST:
            return{
                ...state,
                loading:true
            }

        case actionType.LOCATION_REQUEST_SUCCESS:
            return{
                ...state,
                loading:false,
                locations:action.payload
            }

        case actionType.LOCATION_REQUEST_FAILURE:
            return{
                ...state,
                loading:false,
                error:action.payload
            }

        default:
            return state;

    }
}

export default locationReducer;