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

          case actionType.BRAND_TYPE_REQUEST:
              return{
                ...state,
                loading:true
              }
          case actionType.BRAND_TYPE_REQUEST_SUCCESS:
              return{
                  ...state,
                  loading:false,
                  categoryTypes: action.payload
              }

          case actionType.BRAND_REQUEST:
              return{
                  ...state,
                  loading:true
              }

          case actionType.BRAND_REQUEST_SUCCESS:
              return{
                  ...state,
                  loading:false,
                  brandTypes:action.payload
              }

            case actionType.OWNER_REQUEST:
                return{
                    ...state,
                    loading:true,
                    
                }

            case actionType.OWNER_REQUEST_SUCCESS:
                return{
                    ...state,
                    loading:false,
                    ownerTypes: action.payload
                }

           


                
           default:
               return state;
       }
}

export default categoryReducer