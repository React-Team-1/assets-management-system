import * as actionType from "../actions"
const initialState = {
     loading:false,
}
//     available: [
//             {
//             ItemNo: "1",
//             serialNumber: "1002345555",
//             assetImg: "https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Flaptop&psig=AOvVaw1pTJDg6ijrb9EiE2AgCBps&ust=1623152734448000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCIDT2a65hfECFQAAAAAdAAAAABAD",
//             assetName: "Standing Speaker",
//             assetBrand: "Hp",
//             assetCategory: "Electronics",
//             assetOwner: "Amalitech",
//             status: "Status",
//             stat: "In-store"
//         },

//         {
//             ItemNo: "2",
//             serialNumber: "1002345555",
//             assetImg: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fsensusair.com.au%2Fhow-to-select-the-best-domestic-air-conditioning-unit%2F&psig=AOvVaw1MbfdbTvZfa11Q0Afa9k4v&ust=1623152832425000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCJju-de5hfECFQAAAAAdAAAAABAV",
//             assetName: "Air Conditioner",
//             assetBrand: "Hp",
//             assetCategory: "Electronics",
//             assetOwner: "Amalitech",
//             status: "Status",
//             stat: "In-use"
//         },


//         {
//             ItemNo: "3",
//             serialNumber: "1002345555",
//             assetImg: "data:image/jpeg;base64,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",
//             assetName: "Air Conditioner",
//             assetBrand: "Hp",
//             assetCategory: "Electronics",
//             assetOwner: "Amalitech",
//             status: "Status",
//             stat: "In-use"
//         },
    
//    ]


const assetsReducer =(state = initialState, action)=>{
    
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

        

            default:
                return state;
     }
}

export default assetsReducer