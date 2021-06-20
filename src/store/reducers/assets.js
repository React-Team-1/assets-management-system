import * as actionType from "../actions"
const initialState = {
     loading:false,
}


const assetsReducer =(state = initialState, action)=>{
     console.log(action.type)
     switch(action.type){
         
         case actionType.FETCH_ASSETS_REQUEST:
             return{
                 ...state,
                 loading:true
             }
            
         case actionType.FETCH_ASSETS_SUCESS:
             return{
                 ...state,
                  Instore:action.payload,
                  loading:false
             }
        case actionType.FETCH_ASSETS_FAILURE:
              return{
                  ...state,
                  loading:false,
                  Instore:false,
                  error:action.payload
              }

        //Issue assets starts here

        case actionType.ISSUE_ASSET_REQUEST:
            console.log("Issue Asset Success was called")
             return{
                 ...state,
                 loading:true
             }
        case actionType.ISSUE_ASSET_SUCCESS:
            console.log("I am called");
            return{
                ...state,
                loading:false,
                msg: action.payload

            }
        case actionType.ISSUE_ASSET_SUCCESS:
            return{
                ...state,
                loading:false,
                msg:action.payload
            }

            //return assets 
            case actionType.RETURN_ASSET_REQUEST:
                return{
                    ...state,
                    loading:true
                }

            case actionType.RETURN_ASSET_SUCCESS:
                return{
                    ...state,
                    loading:false,
                    msg:action.payload
                }

           case actionType.RETURN_ASSET_FAILURE:
             
               return{
                   ...state,
                   loading:false,
                   msg: action.payload
   
               }

          //get people actions
          case actionType.GET_PEOPLE_REQUEST:
              return{
                  ...state,
                  loading:true                 
              }
            
            case actionType.GET_PEOPLE_SUCCESS:
            return{
                ...state,
                loading:false,
                people: action.payload                 
            }

            case actionType.GET_PEOPLE_FAILURE:
                return{
                    ...state,
                    loading:false,
                    error: action.payload                 
                }
              

                    //Delete asset actions
                case actionType.DELETE_ASSET_REQUEST:
                    return{
                        ...state,
                        loading:true                 
                    }
                
                case actionType.DELETE_ASSET_SUCCESS:
                return{
                    ...state,
                    loading:false,
                    DeleterequestInfo: action.payload                 
                }

                case actionType.DELETE_ASSET_FAILURE:
                    return{
                        ...state,
                        loading:false,
                        error: action.payload                 
                    }
          

        

            default:
                return state;
     }
}

export default assetsReducer