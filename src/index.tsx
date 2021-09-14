import ReactDom from 'react-dom'
import './index.css'
import './assets/css/icons.css'
import Header from './components/header/header'
import Sidebar from './components/sidebar/sidebar'
import styled from 'styled-components'
import {BrowserRouter as Router, Route, Switch,Redirect} from 'react-router-dom'
import routes from './routes'
import React from 'react'
import Login from './containers/login'
import {useSelector} from 'react-redux'


import { createStore } from 'redux'
import allReducers from './reducers'
import { Provider } from 'react-redux'
const store = createStore(allReducers)


const Wrapper = styled.div`
   width: 100%;
   display: flex;
`

interface IPrivate{
   children:any
   rest?:any
   exact:boolean
   path:string
}

const PrivateRoute:React.FC <IPrivate> = ({children,...rest}) =>{
   const is_loggedin = useSelector((state:any)=>state.logged_in)

    return(
       <Route
          {...rest}
          render={({location})=>
          is_loggedin ? (
              children
            ) : (
               <Redirect
                 to={{
                    pathname:'/login',
                    state:{from: location}
                 }}
               />
            )
         
         
         }
       
       />
    )

}



const Index = () => {
    return(
        <Provider store={store}>
           <Header title="Admin Panel" name="Geghair"/>
           <Wrapper>
              <Router>
                 <Sidebar/>
                 <Switch>
                      <Route path="/login">
                           <Login/>
                      </Route>

                    {routes.map(({containerPath,name,path})=>{
                          let Container = require(`${containerPath}`).default
                       return(
                          <PrivateRoute key={name} exact path={path}>                                                      
                              <Container/>                            
                          </PrivateRoute>
                       )
                    }
                    )}
                 </Switch>
              </Router>
              
           </Wrapper>
        </Provider>
    )
}

ReactDom.render(<Index/>,document.querySelector("#root"))