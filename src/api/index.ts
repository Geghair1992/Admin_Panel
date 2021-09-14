import {baseApiUrl} from './constants'

const api = (url:string,method:string,body:Object|null) =>{

    return fetch(`${baseApiUrl}/${url}`,{
        method:method,
        body:body ? JSON.stringify(body) : null,
        headers:{
            'content-type':'application/json',
            'accept':'application/json'
        }
    })
    .then(res=>res.json())
   
      
}

export default api;