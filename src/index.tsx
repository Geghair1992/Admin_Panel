import ReactDom from 'react-dom'
import './index.css'
import './assets/css/icons.css'
import Header from './components/header/header'
import Sidebar from './components/sidebar/sidebar'
import styled from 'styled-components'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import routes from './routes'

const Wrapper = styled.div`
   width: 100%;
   display: flex;
`

const Index = () => {
    return(
        <>
           <Header title="Admin Panel" name="Geghair"/>
           <Wrapper>
              <Router>
                 <Sidebar/>
                 <Switch>
                    {routes.map(({containerPath,name,path})=>{
                       return(
                          <Route key={name} exact path={path}>
                             {
                               props => {
                                  let Container = require(`${containerPath}`).default
                                  return(
                                     <Container {...props}/>
                                  )
                               }
                              } 
                          </Route>
                       )
                    })}
                 </Switch>
              </Router>
              
           </Wrapper>
        </>
    )
}

ReactDom.render(<Index/>,document.querySelector("#root"))