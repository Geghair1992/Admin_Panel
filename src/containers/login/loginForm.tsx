import React,{useState} from 'react'
import styled from 'styled-components'
import { useSelector,useDispatch } from 'react-redux'

import { useHistory } from 'react-router-dom'

const ErrorMsg = styled.h3`
  margin-top: 70px;
  color: red;
  font-size: 1em;
  text-align: center;
`
 

const LoginForm:React.FC = () =>{
const [loginInfo, setLoginInfo] = useState<{username:string,password:string}>({
    username:'',
    password:''
})


const history = useHistory()
const is_loggedin = useSelector((state:any)=>state.logged_in)
const dispatch = useDispatch()
const [error, setError] = useState('')

const handleChange = (e : React.ChangeEvent<HTMLInputElement>) =>{
    const {value,name} = e.target
    setLoginInfo({...loginInfo,[name]:value})
}

const handleSubmit = (e : React.FormEvent<HTMLFormElement>) =>{
   e.preventDefault();

   fetch('https://fakestoreapi.com/auth/login',{
       method:'POST',
       body:JSON.stringify(loginInfo),
       headers:{
           'Content-Type':'application/json',
           'accept':'application/json'
       }
    })
    .then(res=>res.json())
    .then(result=>{
        if(result){
        
        dispatch({type:'LOGIN',payload:result.token})
        history.push('/products')

    }else{
        setError('Username or Password is incorrect :(')
        history.push('/')
    }
    })
    .catch(err=>{
        setError('Something went wrong :(')
    })
   
}


    return(
        <>        
         <h1>{is_loggedin ?  "Logged in!" :  "Logged out :("}</h1>
         <form onSubmit={handleSubmit}>
           <ErrorMsg>{error}</ErrorMsg>
           <input type="username" name="username" value={loginInfo.username} onChange={handleChange} required/>
           <input type="password" name="password" value={loginInfo.password} onChange={handleChange} required/> 
           <button>Login</button>
         </form>
       </>
    )
}

export default LoginForm;