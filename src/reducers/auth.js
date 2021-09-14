const authReducer = (state=false,action) =>{
     switch(action.type){
         case 'LOGIN':
             sessionStorage.setItem('auth',action.payload)
             return (state=true);
         case 'LOGOUT':
             return (state=false);
         default:
             const token =  sessionStorage.getItem('auth')
             return token ? state=true : state=false;    
     }
};

export default authReducer;