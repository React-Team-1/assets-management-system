import team from "../../Component/About/TeamMembers"

const initialState = {
    frontend: team.frontend,
    backend: team.backend,
}

const rootReducer = (state = initialState,action)=>{
    return state;
}


export default rootReducer