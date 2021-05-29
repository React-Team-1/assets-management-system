import createValidation from "yup/lib/util/createValidation";

class Auth {
    constructor(){
        this.authenticated = false;
    }

    login(cb){
      const userId = localStorage.getItem("token")

        if(!userId){
           this.authenticated = false;
        }else{
            this.authenticated = true;
            cb();
        }
        
        
    }


    logOut(cb){
        this.authenticated = false;
        const userId = localStorage.getItem("token")
        if(userId){
            localStorage.removeItem("token")
            cb();
        }
       
    }

    isAuthenticated(){
        return this.authenticated;
    }
}


export default new Auth();