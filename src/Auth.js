
import store from "./store/reducers/user"


class Auth  {
     static authenticated;


    action(){
         return{
             type:'USERSTATE'
         }
    }


    login(cb) {
        const userId = localStorage.getItem("token")

        if (!userId) {
            Auth.authenticated = false;
            console.log(userId)
        } else {

            let {auth} = store(null,this.action());
            Auth.authenticated = auth;
            console.log(Auth.authenticated)

            cb();
        }


    }


    logOut(cb) {
        this.authenticated = false;
        const userId = localStorage.getItem("token")
        if (userId) {
            localStorage.removeItem("token")
            cb();
        }

    }

    isAuthenticated() {
        return Auth.authenticated;
    }



}


// const mapStateToProp =(state)=>{
//     console.log(state.user.auth)
//       return{
//            auth: state.user.auth
//       }
// }


// const mapDispatchToProps =(dispatch) =>{
//     return({
//        onValidUser: () => {dispatch({type: "USERSTATE" })}
//        })   
// }





export default new Auth();