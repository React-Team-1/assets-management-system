import * as actionType from "../actions"


const initialState = {
    loading:false,
}


const categoryReducer = (state= initialState, action)=>{
       switch(action.type){
        case actionType.CATEGORY_REQUEST:
            return{
                ...state,
                loading:true
            }


         case actionType.CATEGORY_REQUEST_SUCCESS:
             return{
                 ...state,
                 loading:false,
                 category: action.payload
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

export default categoryReducer